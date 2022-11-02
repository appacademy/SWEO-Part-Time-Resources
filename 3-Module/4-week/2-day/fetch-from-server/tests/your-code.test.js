import { describe, expect, test } from "@jest/globals";
import { getAllDogs, 
        getDogNumberTwo, 
        postNewDog, 
        postNewDogV2, 
        deleteDog } from "../assets/js/your-code.js"

function isPromise(p) {
    if (typeof p === 'object' && typeof p.then === 'function') {
      return true;
    }  
    return false;
}

function returnsPromise(f) {
    if (
        f.constructor.name === 'AsyncFunction' ||
        (typeof f === 'function' && isPromise(f()))
    ) {
        return true;
    }
    throw new Error(f.name + " does not return fetch")
}

const unmockedFetch = global.fetch;

beforeEach(() => {
   global.fetch = (url, options) => {
       return new Promise((resolve) => resolve({url, options}));
   }
});

afterEach(() => {
    global.fetch = unmockedFetch;
});

describe("fetch call helper functions", () => {
    describe("getAllDogs()", () => {
        test("should return a fetch call",(done) => {
            expect(() => returnsPromise(getAllDogs)).not.toThrowError();
            done()
        });
        test("should make a fetch request to the correct endpoint", async () => {
            const res = await getAllDogs()
            expect(res.url).toBe("/dogs")
        });
        test("should not have any options passed to fetch", async () => {
            const res = await getAllDogs()
            expect(res.options).toBe(undefined)
        });
    });

    describe("getDogNumberTwo()", () => {
        test("should return a fetch call", (done) => {
            expect(() => returnsPromise(getDogNumberTwo)).not.toThrowError();
            done();
        });
        test("should make a fetch request to the correct endpoint", async() => {
            const res = await getDogNumberTwo();
            expect(res.url).toBe("/dogs/2");
        })
    });

    describe("postNewDog()", () => {
        test("should return a fetch call", (done) => {
            expect(() => returnsPromise(postNewDog)).not.toThrowError();
            done();
        });
        test("should make a request to the correct endpoint", async () => {
            const res = await postNewDog()
            expect(res.url).toBe("/dogs")
        });
        test("should set the correct method", async() => {
            expect.assertions(1);
            const res = await postNewDog();
            expect(/^POST$/i.test(res.options.method)).toBe(true);
        })
        test("should set the appropriate headers", async () => { 
            expect.assertions(2);
            const res = await postNewDog();
            const [[key, value]] = Object.entries(res.options.headers);
            console.log(key, value)
            expect(/^Content-Type$/i.test(key)).toBe(true);
            expect(/^application\/x-www-form-urlencoded$/i.test(value)).toBe(true);
        });
        test("should send the appropriate body", async () => {
            expect.assertions(3);
            const res = await postNewDog();
            expect(res.options.body instanceof URLSearchParams).toBe(true);
            expect(res.options.body.has("name")).toBe(true)
            expect(res.options.body.has("age")).toBe(true)
        });
    });

    describe("postNewDogV2(name, age)", () => {
        test("should return a fetch call", (done) => {
            expect(() => returnsPromise(postNewDogV2)).not.toThrowError();
            done();
        });
        test("should make a request to the correct endpoint", async () => {
            const res = await postNewDogV2()
            expect(res.url).toBe("/dogs")
        });
        test("should set the appropriate headers", async () => { 
            expect.assertions(2);
            const res = await postNewDogV2("Rosie",1);
            const [[key, value]] = Object.entries(res.options.headers);
            expect(/^Content-Type$/i.test(key)).toBe(true);
            expect(/^application\/x-www-form-urlencoded$/i.test(value)).toBe(true);
        });
        test("should send the appropriate body", async () => {
            expect.assertions(5);
            const res = await postNewDogV2("ckyussk1q0000oiv5842u3dri",8);
            expect(res.options.body instanceof URLSearchParams).toBe(true);
            expect(res.options.body.has("name")).toBe(true)
            expect(res.options.body.has("age")).toBe(true);
            const bodyString = res.options.body.toString()
            expect(bodyString.includes("ckyussk1q0000oiv5842u3dri")).toBe(true)
            expect(bodyString.includes(8)).toBe(true)
            
        });
    });

    describe("deleteDog(id)", () => {
        test("should return a fetch call", (done) => {
            expect(() => returnsPromise(deleteDog)).not.toThrowError();
            done();
        });
        test("should set the appropriate method", async () => {
            expect.assertions(1);
            const res = await deleteDog(1)
            expect(/POST/i.test(res.options.method)).toBe(true);
        })
        test("should set the appropriate headers", async () => { 
            expect.assertions(2);
            const res = await deleteDog(1);
            const [[key, value]] = Object.entries(res.options.headers);
            expect(/AUTH/i.test(key)).toBe(true);
            expect(value).toBe("ckyut5wau0000jyv5bsrud90y");
        });
        test("should be sent to the correct endpoint", async () => {
            expect.assertions(1);
            const res = await deleteDog(90)
            expect(res.url).toBe("/dogs/90/delete");
        })
    })
})