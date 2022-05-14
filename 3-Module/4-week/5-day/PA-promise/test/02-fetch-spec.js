if (typeof AssertionError === 'undefined') {
  var AssertionError = require('assertion-error');
  var chai = require('chai');
  var makeFetch = require('./node-fetch')(1, true);
}

require('./response');

if (typeof expect === 'undefined') {
  expect = chai.expect;
}

describe('PUT /colors/1', () => {
  let jsonSpy;
  let spy;
  let options;
  let error;
  let resBody;
  before(async () => {
    resBody = {
      id: 1,
      color: "green"
    };
    const response = new CustomResponse(JSON.stringify(resBody),
    {
      status: 200,
      statusText: 'OK',
      headers: new CustomHeaders({
        'Content-Type': 'application/json',
      }),
    });
    jsonSpy = chai.spy.on(response, 'json');
    consoleSpy = chai.spy.on(console, 'log');

    if (typeof makeFetch !== 'undefined') {
      spy = makeFetch(Promise.resolve(response), (...args) => {
        options = args[1];
      });
    } else {
      spy = chai.spy.on(window, 'fetch', (...args) => {
        options = args[1];
        return Promise.resolve(response);
      });
    }

    try {
      if (typeof window === 'undefined') {
        solution = require('../02-fetch');
      }
    } catch (e) {
      error = e;
    }
  });

  after(() => {
    if (typeof window !== 'undefined') {
      chai.spy.restore(window);
    }
  });

  context('makes a request with fetch', () => {

    it('calls the fetch function and makes a request to /colors/1', async () => {
      if (error) throw error;
      try {
        expect(spy).to.have.been.called.with('/colors/1');
       } catch (e) {
        throw new AssertionError(`Expected request to be made to "/colors/1"`);
      }
    });

    it('includes the appropriate headers', async () => {
      if (error) throw error;

      options.headers.hasOwnProperty("Content-Type") ?
        expect(options.headers["Content-Type"]).to.eql("application/json") :
        expect(options.headers["content-type"]).to.eql("application/json");
    });

    it('makes a request with a method of PUT', async () => {
      if (error) throw error;
      expect(options).to.have.property('method');
      expect(options.method.toLowerCase()).to.equal('put', 'Expected fetch() method to be "PUT"');
    });

    it('makes a request with a JSON body as instructed', async () => {
      if (error) throw error;
      expect(options).to.have.property('body');
      expect(typeof options.body).to.eql("string", `Expected the body of the request to be a string`);
      expect(JSON.parse(options.body)).to.eql({ color: "green" }, `Expected body of fetch() request to be an object "{ color: "green" }".`);
    });

    it('invokes json() on the response of the fetch() call', async () => {
      if (error) throw error;
      try {
        expect(jsonSpy).to.have.been.called.with.exactly();
      } catch (e) {
        throw new AssertionError('Expected json() to have been called on the response of the fetch() call')
      }
    });

    it('and prints the response to the console', async () => {
      if (error) throw error;
      expect(consoleSpy).to.have.been.called.with({ id: 1, color: "green" });
    });
  });
});
