// place array such like arr[0]< arr[1] >arr[2] <arr[3]> arr[4]<arr[6]


arr = new Array(-7, 1, 5, 2, -4, 3, 0);
// arr.sort((a, b) => {
//     if (a > b) return 1;
//     if (a < b) return -1;
//     return 0;
// });

arr.sort((a, b) => a - b);
// arr.sort(); //not works for negative numbers
console.log(arr)

const zigzag = (nums) => {
    for (let i = 2; i < nums.length; i++) {
        if (i % 2 === 0) {
            const temp = nums[i];
            nums[i] = nums[i - 1];
            nums[i - 1] = temp;
        }
    }
    return arr;
}

console.log(zigzag(arr))
