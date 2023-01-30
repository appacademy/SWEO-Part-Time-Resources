const assert = require("assert");
const stringChanger = require("../problems/02-stringChanger")
describe("stringChanger()", function () {

    it("should properly capitalize a word", function () {
        assert.strictEqual(stringChanger("foo", "capitalize"), "Foo")
        assert.strictEqual(stringChanger("watermelon", "capitalize"), "Watermelon")
    })
    it("should properly uppercase a word", function () {
        assert.strictEqual(stringChanger("foo", "uppercase"), "FOO")
        assert.strictEqual(stringChanger("peach", "uppercase"), "PEACH")
    })
    it("should properly double a word", function () {
        assert.strictEqual(stringChanger("foo", "double"), "foofoo")
        assert.strictEqual(stringChanger("mango", "double"), "mangomango")
    })
    it("should properly reverse a word", function () {
        assert.strictEqual(stringChanger("foo", "reverse"), "oof")
        assert.strictEqual(stringChanger("papaya", "reverse"), "ayapap")
    })
    it("should properly handle bad input", function () {
        assert.strictEqual(stringChanger("foo", "unknown"), "foo")
        assert.strictEqual(stringChanger("banana", "bad input"), "banana")
    })

})