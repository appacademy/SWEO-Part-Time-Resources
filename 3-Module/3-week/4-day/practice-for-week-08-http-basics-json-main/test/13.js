const { compareHash, RequestError, ResponseError } = require('./utils');
const { formatAnswer } = require('./utils/formats');

const questionKey = 13;

const answers = require('../answers.json');
const answer = formatAnswer(answers[questionKey])
const solutions = require('./utils/hashed-answers.json');
const solution = solutions[questionKey];
describe ('13 - Submit a delete for an existing review', function () {

    describe('Request', function() {
        it('should have the appropriate request method', function (done) {
            const test = compareHash(solution.request, answer.request, 'method');
            if (test) return done();
            else return done(new RequestError('method'));
        });

        it('it should have the appropriate request URL', function (done) {
            const test = compareHash(solution.request, answer.request, 'URL');
            if (test) return done();
            else return done(new RequestError('URL'));
        });

        it('it should have NECESSARY request headers', function (done) {
            const test = compareHash(solution.request, answer.request, 'headers');
            if (test) return done();
            else return done(new RequestError('headers'));
        });

        it('it should have the appropriate request body', function (done) {
            const test = compareHash(solution.request, answer.request, 'body');
            if (test) return done();
            else return done(new RequestError('body'));
        });
    });

    describe('Response', function() {
        it('it should have NECESSARY response headers', function (done) {
            const test = compareHash(solution.response, answer.response, 'headers');
            if (test) return done();
            else return done(new ResponseError('headers'));
        });

        it('should have the appropriate response status code', function (done) {
            const test = compareHash(solution.response, answer.response, 'statusCode');
            if (test) return done();
            else return done(new ResponseError('statusCode'));
        });

        it('it should have the appropriate response body', function (done) {
            const test = compareHash(solution.response, answer.response, 'body');
            if (answer.response.body !== null) answer.response.body = !!answer.response.body;
            if (test) return done();
            else return done(new ResponseError('body'));
        });
    });
});
