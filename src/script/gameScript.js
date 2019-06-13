//Variaveis 
var coins = 0;

var inv = [0, 0, 0];
var prodCoins = [1, 2, 4];
var valInv = [10, 20, 40];

//Frames por segundo
var FPS = 30;
var FPSp = 15;

//Funcao adicionar moedas por click
function addCoins() {
    coins += 1;
}

//Comprar upgrades passando index do vetor
function buy(obj) {
    if (coins >= valInv[obj]) {
        inv[obj]++;
        coins -= valInv[obj];
    } else {
        alert("You don't have enough coins to buy");
    }
}

//Producao dos upgrades
function production() {
    for (i = 0; i < inv.length; i++) {
        coins += inv[i] * prodCoins[i];
    }
}

//Funcao render -> alterando HTML
function render() {
    document.getElementById('nCoins').innerHTML = "R$" + coins + ",00";
    document.getElementById('inventory').innerHTML = `
    Auto-Click: ${inv[0]} <br>
    Gnome: ${inv[1]} <br>
    Factory: ${inv[2]} <br>
    `
}

//Taxa de atualizacao - Padrao
setInterval(function () {
    render();
}, 1000 / FPS);

//Taxa de atualizacao - Producao
setInterval(function () {
    production();
}, 1000 / FPSp);

//-----------------------------------------

//Funcao para salvar Coins

//Funcao para importar coins