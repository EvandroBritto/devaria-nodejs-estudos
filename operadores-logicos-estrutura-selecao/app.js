const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

console.log ('Esse programa vai checar se voce e maior de 18 anos e se tem habilitacao para saber se voce pode entrar no kart');
console.log('Alem das suas verificacoes, precisamos verificar se voce esta na lista de presenca do horario');

readLine.question('Qual o ano do seu nascimento?', ano => {
    if(ano > 2005){
        console.log('Voce nao tem 18 anos');
    }else{
        readLine.question('Voce tem habilitacao? (Sim/Nao)', temHabilitacao => {
            if(!(temHabilitacao.toUpperCase () === "SIM")){
                console.log("Voce nao tem habilitacao para entrar no Kart");
            }else{
                readLine.question('Qual o seu nome?', nome =>{
                    switch (nome){
                        case 'Douglas' :
                            console.log('Bem vindo ao Kart Douglas');
                            break
                        case 'Rafael' :
                            console.log('Bem vindo ao Kart Rafael');
                            break;
                        default:
                            console.log('Seu nome nao foi identificado na lista de presenca');
                    }
                });
            }
        })
    }
})