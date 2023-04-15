
function rot(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    const result = new Array(numCols).fill().map(() => new Array(numRows).fill(0));
    for (let i = 0; i < numCols; i++) {


        for (let j = 0; j < numRows; j++) {
            result[i][j] = matrix[j][numCols - 1 - i];

        }
    }

    return result;
}

let a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
];
console.log(rot(a));
