let tabuleiro = ['', '', '', '', '', '', '', '', ''];
let vez = 0;
const simbolos = ['o', 'x'];
let valores = {'X': 0, 'O': 0};
let linha = [];
function handleMove(position) {
    if (tabuleiro[position] == '') {
        tabuleiro[position] = simbolos[vez];
        vez = (vez == 0) ? 1 : 0;
    }
}
function isDraw() {

    return tabuleiro.filter(i => i != '').length == 9 ? true : false;
}

function reset() {
    vez = 0;
    fim = false;
    for (let index = 0; index < tabuleiro.length; index++) {
        tabuleiro[index] = '';
    }
}
function isWin() {
    
    let winState = [
        [0, 1, 2], 
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (let index = 0; index < winState.length; index++) {
        const element = winState[index];
        
        const p1 = element[0];
        const p2 = element[1];
        const p3 = element[2];
        if (tabuleiro[p1] == tabuleiro[p2] &&
            tabuleiro[p1] == tabuleiro[p3] && tabuleiro[p1] != '') {
            valores[tabuleiro[p1].toUpperCase()]++;
            linha = [...element];
            return true;
        }
    }
    return false;

}