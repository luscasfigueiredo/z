function ordenador(lista, ordem){

    if(ordem == 'crescente'){
        return lista.sort((a, b) => a - b);

    }else {
        return lista.sort((a, b) => b - a);

    }
}

module.exports = ordenador