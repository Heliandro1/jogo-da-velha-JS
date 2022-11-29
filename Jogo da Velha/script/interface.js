let gameover = document.getElementById("gameover");
let msg = document.getElementById("msg");
let btnRestart = document.getElementById("btnRestart");
document.addEventListener("DOMContentLoaded", () =>{
    let squares = document.querySelectorAll(".square");

    squares.forEach(element => {
        element.addEventListener("click", handleClick);
    });
});

btnRestart.addEventListener("click", () =>{
    resetAll();
    reset()
});

function resetAll() {
    let squares = document.querySelectorAll(".square");
    squares.forEach(element => {
        if (element.children.length == 1) {
            element.children.item(0).remove();
        }
        
    });
    if (linha.length == 3) {
        removeSelection(linha);
    }
    gameover.style.display = 'none';
}

function handleClick(e) {
    handleMove(e.target.id);
    updateSquare(e.target.id);
    if (!isWin()) {
        if(isDraw()){
            setTimeout(() => {
                gameover.style.display = 'flex';
                msg.innerText = `O Jogo terminou empatado`;
            }, 10);
        }
    }
    else{
        setTimeout(() => {
            gameover.style.display = 'flex';
            msg.innerText = `O Jogo terminou, Parabéns Jogador "${e.target.children.item(0).className.toUpperCase()}" venceu o jogo`;
            selectWin(linha, e.target.children.item(0).className.toUpperCase());
        }, 10);
    }
}
function selectWin(sq, vez) {
    sq.forEach(element => {
        const square = document.getElementById(`${element.toString()}`);
        square.style.transform = 'translate(-3px, -3px)';
        square.style.transition = 'all 1s';
    });
    const p = document.getElementById(`placar${vez}`);
    const p1 = document.getElementById(`placar${vez}V`);
    p.style.transform = 'translate(-3px, -3px)';
    p.style.transition = 'all 1s';
    p1.innerText = valores[vez];
}

function removeSelection(sq) {
    sq.forEach(element => {
        let square = document.getElementById(`${element.toString()}`);
        square.style.transform = 'none';
    });
    const pl = document.getElementsByClassName("placar");
    for (const iterator of pl) {
        iterator.style.transform = 'none';
    }
}

function updateSquare(pos) {
    let square = document.getElementById(pos.toString());
    let simbolo = tabuleiro[pos];
    square.innerHTML = `<div class='${simbolo}'></div>`
}
