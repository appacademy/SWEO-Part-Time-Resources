/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 David Frank
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/*******************************************************************************
 * Body.js
 *
 * Body interface provides common methods for Request and Response
 *
 * https://github.com/node-fetch/node-fetch/blob/master/src/body.js
 */

const BODY_INTERNALS = Symbol('Body internals');

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
  if (body === null) {
    // Body is undefined or null
    body = null;
  } else {
    // None of the above
    // coerce to string then buffer
    body = String(body);
  }

  this[BODY_INTERNALS] = {
    body,
  };
}

Body.prototype = {
  get body() {
    return this[BODY_INTERNALS].body;
  },

  /**
   * Decode response as json
   *
   * @return  Promise
   */
  json() {
    return Promise.resolve(JSON.parse(this.body.toString()));
  },

  /**
   * Decode response as text
   *
   * @return  Promise
   */
  text() {
    return Promise.resolve(this.body.toString());
  },
};

Object.defineProperties(Body.prototype, {
  body: {enumerable: true},
  json: {enumerable: true},
  text: {enumerable: true}
});

Body.mixIn = proto => {
  for (const name of Object.getOwnPropertyNames(Body.prototype)) {
    // istanbul ignore else: future proof
    if (!Object.prototype.hasOwnProperty.call(proto, name)) {
      const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
      Object.defineProperty(proto, name, desc);
    }
  }
};
/*******************************************************************************
 * Headers.js
 *
 * Headers class offers convenient helpers
 *
 * https://github.com/node-fetch/node-fetch/blob/master/src/headers.js
 */

const invalidTokenRegex = /[^`\-\w!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\u0020-\u007E\u0080-\u00FF]/;

function validateName(name) {
  name = `${name}`;
  if (invalidTokenRegex.test(name) || name === '') {
    throw new TypeError(`${name} is not a legal HTTP header name`);
  }
}

function validateValue(value) {
  value = `${value}`;
  if (invalidHeaderCharRegex.test(value)) {
    throw new TypeError(`${value} is not a legal HTTP header value`);
  }
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
  name = name.toLowerCase();
  for (const key in map) {
    if (key.toLowerCase() === name) {
      return key;
    }
  }

  return undefined;
}

const MAP = Symbol('map');
class Headers {
  /**
   * Headers class
   *
   * @param   Object  headers  Response headers
   * @return  Void
   */
  constructor(init = undefined) {
    this[MAP] = Object.create(null);

    for (const key of Object.keys(init)) {
      const value = init[key];
      this.append(key, value);
    }
  }

  /**
   * Return combined header value given name
   *
   * @param   String  name  Header name
   * @return  Mixed
   */
  get(name) {
    name = `${name}`;
    validateName(name);
    const key = find(this[MAP], name);
    if (key === undefined) {
      return null;
    }

    let value = this[MAP][key].join(', ');
    if (name.toLowerCase() === 'content-encoding') {
      value = value.toLowerCase();
    }

    return value;
  }

  /**
   * Iterate over all headers
   *
   * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
   * @param   Boolean   thisArg   `this` context for callback function
   * @return  Void
   */
  forEach(callback, thisArg = undefined) {
    let pairs = getHeaders(this);
    let i = 0;
    while (i < pairs.length) {
      const [name, value] = pairs[i];
      callback.call(thisArg, value, name, this);
      pairs = getHeaders(this);
      i++;
    }
  }

  /**
   * Overwrite header values given name
   *
   * @param   String  name   Header name
   * @param   String  value  Header value
   * @return  Void
   */
  set(name, value) {
    name = `${name}`;
    value = `${value}`;
    validateName(name);
    validateValue(value);
    const key = find(this[MAP], name);
    this[MAP][key !== undefined ? key : name] = [value];
  }

  /**
   * Append a value onto existing header
   *
   * @param   String  name   Header name
   * @param   String  value  Header value
   * @return  Void
   */
  append(name, value) {
    name = `${name}`;
    value = `${value}`;
    validateName(name);
    validateValue(value);
    const key = find(this[MAP], name);
    if (key !== undefined) {
      this[MAP][key].push(value);
    } else {
      this[MAP][name] = [value];
    }
  }

  /**
   * Check for header name existence
   *
   * @param   String   name  Header name
   * @return  Boolean
   */
  has(name) {
    name = `${name}`;
    validateName(name);
    return find(this[MAP], name) !== undefined;
  }

  /**
   * Delete all header values given name
   *
   * @param   String  name  Header name
   * @return  Void
   */
  delete(name) {
    name = `${name}`;
    validateName(name);
    const key = find(this[MAP], name);
    if (key !== undefined) {
      delete this[MAP][key];
    }
  }

  /**
   * Return raw headers (non-spec api)
   *
   * @return  Object
   */
  raw() {
    return this[MAP];
  }

  /**
   * Get an iterator on keys.
   *
   * @return  Iterator
   */
  keys() {
    return createHeadersIterator(this, 'key');
  }

  /**
   * Get an iterator on values.
   *
   * @return  Iterator
   */
  values() {
    return createHeadersIterator(this, 'value');
  }

  /**
   * Get an iterator on entries.
   *
   * This is the default iterator of the Headers object.
   *
   * @return  Iterator
   */
  [Symbol.iterator]() {
    return createHeadersIterator(this, 'key+value');
  }
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];

Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
  value: 'Headers',
  writable: false,
  enumerable: false,
  configurable: true
});

Object.defineProperties(Headers.prototype, {
  get: {enumerable: true},
  forEach: {enumerable: true},
  set: {enumerable: true},
  append: {enumerable: true},
  has: {enumerable: true},
  delete: {enumerable: true},
  keys: {enumerable: true},
  values: {enumerable: true},
  entries: {enumerable: true}
});

function getHeaders(headers, kind = 'key+value') {
  const keys = Object.keys(headers[MAP]).sort();
  return keys.map(
    kind === 'key' ?
      k => k.toLowerCase() :
      (kind === 'value' ?
        k => headers[MAP][k].join(', ') :
        k => [k.toLowerCase(), headers[MAP][k].join(', ')])
  );
}

const HEADERS_ITERATOR_INTERNAL = Symbol('Headers iterator internal');

function createHeadersIterator(target, kind) {
  const iterator = Object.create(HeadersIteratorPrototype);
  iterator[HEADERS_ITERATOR_INTERNAL] = {
    target,
    kind,
    index: 0
  };
  return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
  next() {
    // istanbul ignore if
    if (!this ||
      Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
      throw new TypeError('Value of `this` is not a HeadersIterator');
    }

    const {
      target,
      kind,
      index
    } = this[HEADERS_ITERATOR_INTERNAL];
    const values = getHeaders(target, kind);
    const length_ = values.length;
    if (index >= length_) {
      return {
        value: undefined,
        done: true
      };
    }

    this[HEADERS_ITERATOR_INTERNAL].index = index + 1;

    return {
      value: values[index],
      done: false
    };
  }
}, Object.getPrototypeOf(
  Object.getPrototypeOf([][Symbol.iterator]())
));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
  value: 'HeadersIterator',
  writable: false,
  enumerable: false,
  configurable: true
});

/**
 * the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
  const object = {__proto__: null, ...headers[MAP]};

  // Http.request() only supports string as Host header. This hack makes
  // specifying custom Host header possible.
  const hostHeaderKey = find(headers[MAP], 'Host');
  if (hostHeaderKey !== undefined) {
    object[hostHeaderKey] = object[hostHeaderKey][0];
  }

  return object;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(object) {
  const headers = new Headers();
  for (const name of Object.keys(object)) {
    if (invalidTokenRegex.test(name)) {
      continue;
    }

    if (Array.isArray(object[name])) {
      for (const value of object[name]) {
        if (invalidHeaderCharRegex.test(value)) {
          continue;
        }

        if (headers[MAP][name] === undefined) {
          headers[MAP][name] = [value];
        } else {
          headers[MAP][name].push(value);
        }
      }
    } else if (!invalidHeaderCharRegex.test(object[name])) {
      headers[MAP][name] = [object[name]];
    }
  }

  return headers;
}


const RESPONSE_INTERNALS = Symbol('Response internals');

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
  constructor(body = null, options = {}) {
    Body.call(this, body, options);

    const status = options.status || 200;
    const headers = new Headers(options.headers);

    this[RESPONSE_INTERNALS] = {
      url: options.url,
      status,
      statusText: options.statusText || '',
      headers,
    };
  }

  get url() {
    return this[RESPONSE_INTERNALS].url || '';
  }

  get status() {
    return this[RESPONSE_INTERNALS].status;
  }

  /**
   * Convenience property representing if the request ended normally
   */
  get ok() {
    return this[RESPONSE_INTERNALS].status >= 200 && this[RESPONSE_INTERNALS].status < 300;
  }

  get redirected() {
    return false;
  }

  get statusText() {
    return this[RESPONSE_INTERNALS].statusText;
  }

  get headers() {
    return this[RESPONSE_INTERNALS].headers;
  }
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
  url: {enumerable: true},
  status: {enumerable: true},
  ok: {enumerable: true},
  redirected: {enumerable: true},
  statusText: {enumerable: true},
  headers: {enumerable: true},
  clone: {enumerable: true}
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
  value: 'Response',
  writable: false,
  enumerable: false,
  configurable: true
});

module.exports.Response = Response;
module.exports.Headers = Headers;
CustomHeaders = Headers;
CustomResponse = Response;