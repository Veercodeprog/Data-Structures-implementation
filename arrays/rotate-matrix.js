let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
for (let i = 0; i < arr.length; i++) {
    let row = i;
    let column = arr[i].length - i - 1;
    for (let j = arr[i].length - i - 1; j >= 0; j--) {
        let t = arr[i][j];
        arr[i][j] = arr[row][column];
        arr[row][column] = t;
        row++;
    }
}

console.log(arr);
for (let i = 0; i < arr.length; i++) {
    arr[i].reverse();
}
console.log(arr);
