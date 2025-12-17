let size = 5;
let px = 0;
let py = 0;
let tx = Math.floor(Math.random() * size);
let ty = Math.floor(Math.random() * size);
let moves = 0;

while (true) {
    let board = "";

    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            if (x === px && y === py) board += "P ";
            else if (x === tx && y === ty) board += "$ ";
            else board += ". ";
        }
        board += "\n";
    }

    alert(board);

    if (px === tx && py === ty) {
        alert(moves);
        break;
    }

    let move = prompt("w s a d");

    if (move === "w" && py > 0) py--;
    if (move === "s" && py < size - 1) py++;
    if (move === "a" && px > 0) px--;
    if (move === "d" && px < size - 1) px++;

    moves++;
}
