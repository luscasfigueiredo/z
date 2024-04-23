function palin(palavra){
  var re = /[\W_]/g;
  var lowRegStr = palavra.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 

  var resposta = true;

  if (reverseStr == lowRegStr){
    resposta = true;

  }else{
    resposta = false; 
  }

  return resposta;
}

module.exports = palin