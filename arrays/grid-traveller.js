// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.



let recursiceCal = 0;
let memoCal = 0;
let memoAlvinCal = 0;

function gridR(m, n) {
    recursiceCal++;
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;


    return gridR(m - 1, n) + gridR(m, n - 1);

}
console.log(gridR(5, 5), recursiceCal);

function memoGrid(m, n, memo = []) {
    memoCal++;
    if (!memo[m]) {
        memo[m] = [];
    }
    if (memo[m][n] !== undefined) {
        return memo[m][n];
    }
    if (m === 0 || n === 0) return 0;
    if (m === 1 && n === 1) return 1;

    memo[m][n] =
        memoGrid(m - 1, n, memo) + memoGrid(m, n - 1, memo);
    return memo[m][n];
}
let arr = [];
console.log(memoGrid(20, 20, arr), memoCal);


function memoAlvinGrid(m, n, memo = {}) {
    memoAlvinCal++;
    const key = m + ',' + n;
    if (key in memo) return memo[key];

    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    memo[key] = memoAlvinGrid(m - 1, n, memo) + memoAlvinGrid(m, n - 1, memo);
    return memo[key];
}

console.log(memoAlvinGrid(3, 2), memoAlvinCal);


// time : O(m*n)
//space: O(m*n)

function gridTab(m, n) {
    const table = new Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    table[1][1] = 1;

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            const current = table[i][j];
            if (j + 1 <= n) table[i][j + 1] += current;
            if (i + 1 <= m) table[i + 1][j] += current;
        }
    }
    return table[m][n];
}

console.log(gridTab(3, 3));
