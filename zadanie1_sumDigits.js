function sumDigits(n) {
    if (n === 0) {
        return 0;
    }
    return (n % 10) + sumDigits(Math.floor(n / 10));
}

console.log(sumDigits(0));       
console.log(sumDigits(12345));   
console.log(sumDigits(100001));  
console.log(sumDigits(999));     
console.log(sumDigits(5005));   
