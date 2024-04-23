const ordenador = require('./ordenador.js')

test('A função Ordenar esta correta', ()=> {
    expect(ordenador([1,3,2,4,5], 'crescente')).toEqual([1,2,3,4,5])
})

test('A função Ordenar esta correta', ()=> {
    expect(ordenador([1,3,2,4,5], 'decrescente')).toEqual([5,4,3,2,1])
})