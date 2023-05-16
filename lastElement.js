function getLastElements(arr, n) {
    if (n === undefined || n >= arr.length) {
        return arr.slice(-1)[0];
    } else {
        return arr.slice(-n);
    }
}

let array2 = ['apple', 'banana', 'cherry', 'date'];
console.log(getLastElements(array2));
console.log(getLastElements(array2, 3));
console.log(getLastElements(array2, 2));  