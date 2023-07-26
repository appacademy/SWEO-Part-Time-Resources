const chai = require("chai");
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

require('dotenv').config();
const jws = require('jws');
const crypto = require('crypto');

describe("Signing, decoding, and verifying a JWT", function() {
    let header, payload, signature, jwtComponents, decodedPayload, verifiedPayload;
    
    before(() => {
        chai.spy.on(jws, 'sign');
        chai.spy.on(jws, 'decode');
        chai.spy.on(jws, 'verify');
        const stdout = require("test-console").stdout;
        const fileResult = stdout.inspectSync(() => require('../app'));
        jwtComponents = fileResult.find(log => log.startsWith('JWT:'));
        decodedPayload = fileResult.find(log => log.startsWith('Payload:'));
        verifiedPayload = fileResult.find(log => log.startsWith('Verified Payload:'));
    });

    it("successfully signs (creates) a JWT with header, payload, and signature", function() {
        try { expect(jwtComponents).to.be.a('string') }
        catch { throw new Error("Expected a `console.log('JWT:', token)` line in app.js") }
        try { expect(jws.sign).to.have.been.called() }
        catch { throw new Error('You must call `.sign` on jsonwebtoken.') }
        ([_, jwtComponents] = /^JWT: (.*)/.exec(jwtComponents));
        [ header, payload, signature ] = jwtComponents.split('.');
        expect(JSON.parse(atob(header))).to.eql({ alg: 'HS256', typ: 'JWT' });
        expect(JSON.parse(atob(payload))).to.have.property("email");
        expect(JSON.parse(atob(payload))).to.have.property("iat");
        expect(JSON.parse(atob(payload))).to.have.property("exp");
        const expectedSignature = crypto.createHmac('sha256', process.env.SECRET_KEY).update(`${header}.${payload}`, 'utf-8').digest('base64url');
        expect(signature).to.eq(expectedSignature);
    });

    it("successfully decodes a JWT payload", function() {
        try { expect(decodedPayload).to.be.a('string') }
        catch { throw new Error("Expected a `console.log('Payload:', payload)` line in app.js") }
        try { expect(jws.decode).to.have.been.called() }
        catch { throw new Error('You must call `.decode` on jsonwebtoken.') }
        const payloadRegex = /email:[\s]*'.*',[\s]*iat:[\s]*[\d]*,[\s]*exp:[\s]*[\d]*/
        expect(JSON.stringify(decodedPayload.replace(/\n/g, '')).replace(/\\u001b\[3[\d]m/g, '')).to.match(payloadRegex);
    });

    it("successfully verifies a JWT", function() {
        try { expect(verifiedPayload).to.be.a('string') }
        catch { throw new Error("Expected a `console.log('Verified Payload:', verifiedPayload)` line in app.js") }
        try { expect(jws.verify).to.have.been.called() }
        catch { throw new Error('You must call `.verify` on jsonwebtoken.') }
        const payloadRegex = /email:[\s]*'.*',[\s]*iat:[\s]*[\d]*,[\s]*exp:[\s]*[\d]*/
        expect(JSON.stringify(verifiedPayload.replace(/\n/g, '')).replace(/\\u001b\[3[\d]m/g, '')).to.match(payloadRegex);
    });
});
