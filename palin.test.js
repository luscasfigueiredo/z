const palin = require('./palin.js')

test('A palavra é palindromo', ()=> {
    expect(palin('ovo')).toBe(true)
})

test('A palavra é palindromo', ()=> {
    expect(palin('pedra')).toBe(false)
})