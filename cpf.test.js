const cpf = require('./cpf.js')

test('O CPF esta correto', ()=> {
    expect(cpf('12345678909')).toBe(true)
})

test('O CPF não esta correto', ()=> {
    expect(cpf('12365412378')).toBe(false)
})