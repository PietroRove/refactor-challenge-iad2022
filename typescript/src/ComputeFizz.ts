import { IComputeFizz } from "./IComputeFizz";

export class ComputeFizz implements IComputeFizz {
  compute(inputNumber: number): string {
    if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
      return "FizzBuzz";
    }
    if (inputNumber % 3 === 0) {
      return "Fizz";
    }
    if (inputNumber % 5 === 0) {
      return "Buzz";
    }

    return String(inputNumber);
  }
}
