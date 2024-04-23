const primo = require('./primo.js')

test('O Numero é primo', ()=> {
    expect(primo('7')).toBe(true)
})

test('O Numero não é primo', ()=> {
    expect(primo('4')).toBe(false)
})