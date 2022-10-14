import {assert} from "chai";
import {FizzBuzz} from "../src/FizzBuzz";
import{ComputeFizz} from "../src/ComputeFizz"

describe("FizzBuzz Test Suite", () => {
    it("simple number", () => {
        const computeFizz = new ComputeFizz();
        let fizzBuzz = new FizzBuzz(computeFizz);
        assert.equal(fizzBuzz.say(1), "1");
        assert.equal(fizzBuzz.say(2), "2");
    });

    it("Fizz", () => {
        const computeFizz = new ComputeFizz();
        let fizzBuzz = new FizzBuzz(computeFizz);
        assert.equal(fizzBuzz.say(3), "Fizz");
    });

    it("Buzz", () => {
        const computeFizz = new ComputeFizz();
        let fizzBuzz = new FizzBuzz(computeFizz);
        assert.equal(fizzBuzz.say(5), "Buzz");
    });

    it("FizzBuzz", () => {
        const computeFizz = new ComputeFizz();
        let fizzBuzz = new FizzBuzz(computeFizz);
        assert.equal(fizzBuzz.say(15), "FizzBuzz");
    });
});
