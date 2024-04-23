const {ctof, ftoc} = require('./temperatura.js')


test('A Conversão de C pra F esta correta', ()=> {
    expect(ctof(10)).toBe(50)
})

test('A Conversão de F pra C esta correta', ()=> {
    expect(ftoc(50)).toBe(10)
})