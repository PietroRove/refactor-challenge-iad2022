import {FizzBuzz} from "./FizzBuzz";
import {ComputeFizz} from "./ComputeFizz";

const computeFizz = new ComputeFizz();
let fizzBuzz = new FizzBuzz(computeFizz);
for (let inputNumber = 1; inputNumber <= 100; inputNumber++) {
    let say = fizzBuzz.say(inputNumber);
    console.log(say);
}
