(function chessDesk() {
    let chess = document.querySelector(".chessField");
    let num = 0;

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (num % 2 == 0) {
                chess.innerHTML += '<div class="chessBlock backgroundBlack"></div>';
            } else {
                chess.innerHTML += '<div class="chessBlock"></div>'
            }
            num++;
        }
        num++;
    }
    let block = document.querySelector(".chessBlock");
    block.innerHTML = '<div class="chessBlock backgroundBlack"></div>';
    /* for (let k = 0; k < 8; k++) {
         chess.innerHTML += '<div class="chessBlock backgroundBlack"></div>';
     }*/
})()