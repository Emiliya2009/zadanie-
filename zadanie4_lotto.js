function losujLotto() {
    let numbers = [];

    while (numbers.length < 6) {
        let randomNumber = Math.floor(Math.random() * 49) + 1;

        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers;
}

let userNumbers = [3, 12, 25, 33, 40, 49];

let drawnNumbers = losujLotto();
let hits = 0;

for (let i = 0; i < userNumbers.length; i++) {
    if (drawnNumbers.includes(userNumbers[i])) {
        hits++;
    }
}

console.log(userNumbers);
console.log(drawnNumbers);
console.log(hits);
