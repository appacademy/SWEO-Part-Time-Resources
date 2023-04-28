const formatMethod = (method) => {
    if (typeof method !== 'string') return "";
    return method
        .replace(/\s/g, "")
        .toLowerCase();
};

exports.formatMethod = formatMethod;

const formatURL = (url) => {
    if (!url) return !!url
    if (typeof url !== 'string') return "";
    return url
        .replace(/:\w+/g, ':p')
        .replace(/%20/g, ' ')
        .replace(/\/$/, "")
        .toLowerCase();
};

exports.formatURL = formatURL;

const KEYS_TO_IGNORE = ['categories'];

const formatReqBody = (body) => {
    if (
        typeof body === 'object' &&
        !Array.isArray(body) &&
        body !== null
    ) {
        body = Object.assign({}, body);
        for (let key in body) {
            if (KEYS_TO_IGNORE.includes(key)){
                if (typeof body[key] === 'string') body[key] = false;
                if (body[key] instanceof Array) body[key] = true;
            }
            else body[key] = formatReqBody(body[key])
        }
        return body;
    }
    if (Array.isArray(body)) {
        body = Array.from(body);
        for (let key in body) {
            if (typeof body[key] === 'object') body[key] = formatReqBody(body[key])
        }
        return body;
    }
    if (typeof body === 'string') return "";
    if (typeof body === 'number') return "";
    if (typeof body === 'boolean') return body;

    return body;
};

exports.formatReqBody = formatReqBody;

const formatStatusCode = (statusCode) => {
    if (typeof statusCode !== 'number') return 0;
    return statusCode.toString();
};

exports.formatStatusCode = formatStatusCode;

const HEADERS_TO_CHECK = [
    'content-type',
    'location'
];

const formatHeaders = (headers) => {
    // if (!headers) return !!headers;
    if (
        typeof headers === 'object' &&
        !Array.isArray(headers) &&
        headers !== null
    ) {
        let keys = Object.keys(headers)
            .sort((a,b) => a.toLowerCase() - b.toLowerCase());
        const values = [];
        for (let key of keys) {
            if (HEADERS_TO_CHECK.includes(key.toLowerCase())) {
            let value = headers[key];
            if (typeof value === 'string') {
                value = value.toLowerCase().split(';')[0].replace(/:\w+/g, ':p');
            }
            values.push(value);
            }
        }
        keys = keys
            .map(key => key.toLowerCase())
            .filter(key => HEADERS_TO_CHECK.includes(key));
        return JSON.stringify(keys).concat(values);
    }
    return JSON.stringify(headers);
};

exports.formatHeaders = formatHeaders;

exports.validateURL = (url) => {
    const validURLs = [ "/", "/products", "/products/best-selling",
    "/products/new", "/products/:p", "/products/:p/edit",
    "/products/:p/delete", "/products/:p/reviews",
    "/reviews/:p/edit", "/reviews/:p", "/reviews/:p/delete",
    "/categories/:p/products", "/assets", "" ];

    if (url && !validURLs.includes(url)) return "/does-not-exist";
    return url;
}

exports.formatAnswer = (answer) => {
    answer.request = {
        method: formatMethod(answer.request.method),
        URL: formatURL(answer.request.URL),
        headers: formatHeaders(answer.request.headers),
        body: formatReqBody(answer.request.body)
    }

    answer.response = {
        headers: formatHeaders(answer.response.headers),
        statusCode: formatStatusCode(answer.response.statusCode),
        body: answer.response.body
    }
    return answer;
}