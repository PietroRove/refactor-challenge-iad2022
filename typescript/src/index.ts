import {FizzBuzz} from "./FizzBuzz";
import {ComputeFizz} from "./ComputeFizz";


const computeFizz = new ComputeFizz(3,"Fizz");



let fizzBuzz = new FizzBuzz([new ComputeFizz(3,"Fizz"),new ComputeFizz(5,"Buzz")]);
for (let inputNumber = 1; inputNumber <= 100; inputNumber++) {
    let say = fizzBuzz.say(inputNumber);
    console.log(say);
}
