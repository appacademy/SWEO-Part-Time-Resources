class NotFoundError extends Error {
  constructor(...params) {
    super(...params);

    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, NotFoundError);
    }

    if (!this.message) this.message = 'Not Found';
    this.name = 'NotFoundError';
    this.status = 404;
    this.statusCode = 404;
  }
}

class BodyError extends Error {
  constructor(...params) {
    super(...params);

    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, BodyError);
    }

    if (!this.message) this.message = 'Something is wrong with the body';
    this.name = 'BodyError';
    this.status = 422;
    this.statusCode = 422;
  }
}

module.exports = {
  NotFoundError,
  BodyError
};