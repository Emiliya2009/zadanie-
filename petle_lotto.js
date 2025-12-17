function losuj() {
    let arr = [];

    while (arr.length < 6) {
        let n = Math.floor(Math.random() * 49) + 1;
        if (!arr.includes(n)) {
            arr.push(n);
        }
    }

    return arr;
}

let user = [1, 2, 3, 4, 5, 6];
let comp = losuj();
let hits = 0;

for (let i = 0; i < user.length; i++) {
    if (comp.includes(user[i])) {
        hits++;
    }
}

console.log(user);
console.log(comp);
console.log(hits);
