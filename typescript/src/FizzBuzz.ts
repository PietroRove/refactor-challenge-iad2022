import {IFizzBuzz} from "./IFizzBuzz";
import { IComputeFizz } from "./IComputeFizz";
import { ComputeFizz } from "./ComputeFizz";

export class FizzBuzz implements IFizzBuzz {
    private readonly combinations: IComputeFizz[];

    constructor(combinations: ComputeFizz[] ) {
        this.combinations = combinations;
    }

    public say(inputNumber: number): string {
        let message = "";
        let matchingCombinations = this.combinations.filter(c => c.isMatch(inputNumber));

        if (matchingCombinations.length > 0){
            matchingCombinations.forEach(mc => {
                let result = mc.compute(inputNumber);
                message += result;
            });

            return message;
        }

        return String(inputNumber);
    }
}


