function ctof(temp){
    return temp * 9 / 5 + 32;
}

function ftoc(temp){
    return (temp - 32) * 5 / 9;
}

module.exports = {ctof, ftoc}