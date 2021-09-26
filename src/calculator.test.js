const {soma, div, multi, sub } = require('./calculator')

//===================  OPERAÇÕES DE SUCESSO ===================

test("Soma é igual a 5 para 2 + 3", () => {
     expect(soma(2,3)).toBe(5)
})

test("Subtração é igual 3  para 7 - 4", () => {
    expect(sub(7, 4)).toBe(3)
})

test("Multiplicação é igual a 30 para 5 X 6", () => {
    expect(multi(5,6)).toBe(30)
})


test("Divisão é igual a 15 para 30 / 2", () => {
    expect(div(30, 2)).toBe(15)
})

// =================== OPERAÇÕS DE FALHAS ===================


test("Soma é igual a 5 para 2 + 3", () => {
    expect(soma(2,1)).toBe(5)
})

test("Subtração é igual 3  para 7 - 4", () => {
   expect(sub(7, 9)).toBe(3)
})

test("Multiplicação é igual a 30 para 5 X 6", () => {
   expect(multi(2,6)).toBe(30)
})


test("Divisão é igual a 15 para 30 / 2", () => {
   expect(div(300, 2)).toBe(15)
})