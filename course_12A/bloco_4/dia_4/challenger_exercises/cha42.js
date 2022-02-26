function verificpalindromo(palavra) {
    let palavravar = palavra;
    let arraydir = [];
    let arrayrev = [];
    for (indiced = 0; indiced < palavravar.length; indiced += 1) {
        arraydir.push(palavravar[indiced]);
        for (indicer = palavra.length - 1; indicer >= 0; indicer -= 1) {
            arrayrev.push(palavravar[indicer]);
        };
    };
    if (arraydir === arrayrev) {
        return console.log('Trata-se de um palíndromo!');
    } else {
        return console.log('Não se trata de um palíndromo!');
    };
};
verificpalindromo('sis');