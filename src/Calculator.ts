export enum Actions {
  SUM = "+",
  SUBTRATION = "-",
  MULTIPLICATION = "*",
  DIVISION = "/",
}

export class Calculator {
  public exec(a: number, b: number, action: Actions): number {
    switch (action) {
      case Actions.SUM:
        return this.sum(a, b);
      case Actions.SUBTRATION:
        return this.subtration(a, b);
      case Actions.MULTIPLICATION:
        return this.multiplication(a, b);
      case Actions.DIVISION:
        return this.division(a, b);
      default:
        throw new Error("Unknown Error");
    }
  }

  private sum(a: number, b: number) {
    return a + b;
  }

  private subtration(a: number, b: number) {
    return a - b;
  }
  private multiplication(a: number, b: number) {
    return a * b;
  }

  private division(a: number, b: number) {
    return a / b;
  }
}
