import { Calculator, Actions } from "./Calculator";

let calculator: Calculator;

describe("Calculator", () => {
  beforeEach(() => {
    calculator = new Calculator();
  });

  //===================  OPERAÇÕES DE SUCESSO ===================

  it("Soma é igual a 5 para 2 + 3", () => {
    expect(calculator.exec(2, 3, Actions.SUM)).toBe(5);
  });

  it("Subtração é igual 3  para 7 - 4", () => {
    expect(calculator.exec(7, 4, Actions.SUBTRATION)).toBe(3);
  });

  it("Multiplicação é igual a 30 para 5 X 6", () => {
    expect(calculator.exec(5, 6, Actions.MULTIPLICATION)).toBe(30);
  });

  it("Divisão é igual a 15 para 30 / 2", () => {
    expect(calculator.exec(30, 2, Actions.DIVISION)).toBe(15);
  });

  it("Deve retorna erro se Action for inválida", () => {
    expect.assertions(1);
    try {
      calculator.exec(30, 2, "=" as Actions);
    } catch (e) {
      expect(e.message).toBe("Unknown Error");
    }
  });

  // =================== OPERAÇÕS DE FALHAS ===================

  it("Soma não pode ser igual a 5 para 2 + 1", () => {
    expect(calculator.exec(2, 1, Actions.SUM)).not.toBe(5);
  });

  it("Subtração não pode ser igual 3 para 7 - 9", () => {
    expect(calculator.exec(7, 9, Actions.SUBTRATION)).not.toBe(3);
  });

  it("Multiplicação não pode ser igual a 30 para 2 X 6", () => {
    expect(calculator.exec(2, 6, Actions.MULTIPLICATION)).not.toBe(30);
  });

  it("Divisão não pode ser igual a 15 para 300 / 2", () => {
    expect(calculator.exec(300, 2, Actions.DIVISION)).not.toBe(15);
  });
});
