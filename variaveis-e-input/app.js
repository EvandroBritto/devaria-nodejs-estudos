const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const minhaPrimeiraConstanteString = 'Minha Primeira Constante';
console.log(minhaPrimeiraConstanteString);

let leituraDeCampo;
readLine.question('Informe sua idade:', input => {
    leituraDeCampo = input;
    console.log(`O usuário digitou: ${leituraDeCampo}`);
});
