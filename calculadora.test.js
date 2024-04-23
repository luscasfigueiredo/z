const {soma, sub, multi, div} = require('./calculadora.js')


test('A soma esta correta', ()=> {
    expect(soma(1,2)).toBe(3)
})

test('A subtracao esta correta', ()=> {
    expect(sub(2,1)).toBe(1)
})

test('A multiplicacao esta correta', ()=> {
    expect(multi(1,2)).toBe(2)
})

test('A divisao esta correta', ()=> {
    expect(div(4,2)).toBe(2)
})