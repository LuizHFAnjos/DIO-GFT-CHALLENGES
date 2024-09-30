function Partidas(vitorias,derrotas){
    return vitorias - derrotas;
 
}

function Nivelando(saldo_vitorias){

    if (saldo_vitorias <= 10 ){
        return "Ferro";
    }else if(saldo_vitorias >= 11 && saldo_vitorias <= 20){
        return "Bronze";
    }else if(saldo_vitorias >= 21 && saldo_vitorias <= 50){
        return "Prata";
    }else if(saldo_vitorias >= 51 && saldo_vitorias <= 80){
        return "Ouro";
    }else if(saldo_vitorias >= 81 && saldo_vitorias <= 90){
        return "Diamante";
    }else if(saldo_vitorias >= 91 && saldo_vitorias <= 100){
        return "Lendario";
    }else{
        return "Imortal";
    }
}

let saldo = Partidas(100,30) //informe as vitorias e derrotas aqui

console.log("O Herói tem de saldo de " +  saldo + " está no nível de " + Nivelando(saldo));


