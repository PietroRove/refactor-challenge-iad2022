import {IFizzBuzz} from "./IFizzBuzz";
import { IComputeFizz } from "./IComputeFizz";

export class FizzBuzz implements IFizzBuzz {
    private computeFizz: IComputeFizz;

    constructor(computeFizz: IComputeFizz) {
       this.computeFizz = computeFizz
    }

    public say(inputNumber: number): string {
       return this.computeFizz.compute(inputNumber);
    }
}


