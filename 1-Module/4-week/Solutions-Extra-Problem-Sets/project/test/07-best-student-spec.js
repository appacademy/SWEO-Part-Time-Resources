const assert = require("assert");
const bestStudent = require("../problems/07-best-student.js");

describe("bestStudent()", function() {

    it("should accept any number of arguments", function() {
        const students = [{ name: 'Justin', points: 20 }, { name: 'Emily', points: 40 }, { name: 'Tom', points: 50 }];
        const students2 = [{}, {}, {}, {}, {}];
        assert.doesNotThrow(() => bestStudent(...students));
        assert.doesNotThrow(() => bestStudent(...students2));
        assert.doesNotThrow(bestStudent);
    });

    it ("should return the name of the student with the most points", function() {
        const students = [
             { name: "Geoff", points: 50 },
             { name: "Justin", points: 1000 },
             { name: "Tom", points: 568 },
             { name: "Emily", points: 700 },
             { name: "Corina", points: 750 }
        ];

        const students2 = [
            { name: "Alex", points: 70 },
            { name: "Chris", points: 100 },
            { name: "Vlad", points: 400 },
            { name: "Ethan", points: 200 },
            { name: "Jason", points: 212 }
        ];

        assert.strictEqual(bestStudent(...students), 'Justin');
        assert.strictEqual(bestStudent(...students2), 'Vlad');
        assert.strictEqual(bestStudent({name: 'Mango the Cat', points: 1000}), 'Mango the Cat');
    });
});