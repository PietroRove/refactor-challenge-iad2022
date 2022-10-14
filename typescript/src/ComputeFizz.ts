import { IComputeFizz } from "./IComputeFizz";

export class ComputeFizz implements IComputeFizz {

  private readonly matchNumber: number;
  private readonly outputString : string;
  
  constructor(matchNumber: number ,outputString: string) {
    this.matchNumber = matchNumber;
    this.outputString = outputString;
  }

  compute(inputNumber: number): string {
    if(inputNumber % this.matchNumber === 0 )
      return this.outputString;

    return "";
  }

  isMatch(inputNumber: number):boolean {
    return (inputNumber % this.matchNumber === 0);
  }
}
