function reverseArray(arr) {
    if (arr.length === 0) {
        return [];
    }
    return [arr[arr.length - 1]].concat(
        reverseArray(arr.slice(0, arr.length - 1))
    );
}

console.log(reverseArray([1, 2, 3]));
console.log(reverseArray(["a", "b", "c"]));
console.log(reverseArray([]));
console.log(reverseArray([5]));
console.log(reverseArray([10, 20, 30, 40]));