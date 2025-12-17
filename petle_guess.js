let play = true;

while (play) {
    let number = Math.floor(Math.random() * 100) + 1;
    let attempts = 10;

    while (attempts > 0) {
        let guess = Number(prompt("1-100"));
        attempts--;

        if (guess === number) {
            alert("OK");
            break;
        } else if (guess > number) {
            alert("Duzo " + attempts);
        } else {
            alert("Malo " + attempts);
        }
    }

    play = prompt("yes/no") === "yes";
}
