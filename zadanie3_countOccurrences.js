function countOccurrences(arr, value) {
    if (arr.length === 0) {
        return 0;
    }

    if (arr[0] === value) {
        return 1 + countOccurrences(arr.slice(1), value);
    } else {
        return countOccurrences(arr.slice(1), value);
    }
}

console.log(countOccurrences([1, 2, 3, 2, 2], 2));
console.log(countOccurrences(["a", "b", "a"], "a"));
console.log(countOccurrences([], 5));
console.log(countOccurrences([5, 5, 5, 5], 5));
console.log(countOccurrences([1, 2, 3], 4));