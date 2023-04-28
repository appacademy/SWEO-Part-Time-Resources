const { createHash } = require('crypto');

class RequestError extends Error {
  constructor(...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, RequestError);
    }

    this.message = this.message + " of the request is not correct";
    this.name = 'RequestError';
  }
}

class ResponseError extends Error {
  constructor(...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ResponseError);
    }

    this.message = this.message + " of the response is not correct";
    this.name = 'ResponseError';
  }
}

function compareHash(hashObj, compareObj, property) {
  let hashCompareValue;
  if (property === 'body') {
    hashCompareValue = hashBody(compareObj[property]);
  } else {
    sortedCompareValue = sortAndStringifyObj(compareObj[property]);
    hashCompareValue = hashOutput(sortedCompareValue);
  }

  const hashValue = hashObj[property];

  // If the solution property value is an array and the starter property value
    // not an array, then see if the value of the starter is included in the
    // solution array (unless the property is the body)
  if (
    Array.isArray(hashValue) &&
    !Array.isArray(compareObj[property]) && property !== 'body'
  ) {
    return hashValue.includes(hashCompareValue);
  }

  if (
    Array.isArray(hashValue) &&
    Array.isArray(compareObj[property]) && property !== 'body'
  ) {
    const sortedHashValues = hashValue.sort();
    const sortedCompareValues = compareObj[property]
      .map(ele => hash(ele))
      .sort();

    return sortedCompareValues.every(ele => sortedHashValues.includes(ele));
  }

  return hashValue === hashCompareValue;
}

function formatBodyValue(bodyObj) {
  if (bodyObj === null) {
    return null;
  }
  return !!bodyObj;
}

function hashBody(body) {
  const sorted = sortAndStringifyObj(body, formatBodyValue)
  return hashOutput(sorted);
}

function hash(input) {
  const sorted = sortAndStringifyObj(input)
  return hashOutput(sorted);
}

function hashOutput(input) {
  if (input === null || typeof input === "number" || typeof input === "boolean") {
    input = JSON.stringify(input);
  }
  const hash = createHash('sha256');
  try {
    hash.update(input);
  } catch (err) {
    console.error("There was an error trying to hash: ", input);
    throw err;
  }
  return hash.digest('hex');
}

function sortObj(obj, cb = undefined) {
  // cb is an optional function that will take the end values of the object and
    // convert it
  if (Array.isArray(obj)) {
    // If obj is an array, sort the elements recursively
    const result = [];
    for (let ele of obj) {
      result.push(sortObj(ele, cb));
    }
    return result;
  } else if (typeof obj === 'object' && obj !== null) {
    // If obj is an object, sort the key-value pairs recursively
    const result = {};
    const objKeys = Object.keys(obj);
    objKeys.sort((key1, key2) => key1.toLowerCase() < key2.toLowerCase() ? -1 : 1);
    for (let key of objKeys) {
      const convertedValue = sortObj(obj[key], cb);
      result[key.toLowerCase()] = convertedValue;
    }
    return result;
  } else if (cb) return cb(obj);
  else if (typeof obj === "string") return obj.toLowerCase();
  return obj;
}

function sortAndStringifyObj(obj, cb = undefined) {
  // cb is an optional function that will take the end values of the object and
    // convert it
  const sortedObj = sortObj(obj, cb);
  if (typeof sortedObj === 'string') return sortedObj;
  return JSON.stringify(sortedObj);
}

module.exports = {
  compareHash,
  hash,
  hashBody,
  RequestError,
  ResponseError,
  sortAndStringifyObj,
}