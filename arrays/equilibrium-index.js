function equilibrium(arr, n) {
    sum = 0; // initialize sum of whole array
    leftsum = 0; // initialize leftsum

    /* Find sum of the whole array */
    for (let i = 0; i < n; ++i)
        sum += arr[i];

    for (let i = 0; i < n; ++i) {
        sum -= arr[i]; // sum is now right sum for index i

        if (leftsum == sum)
            return i;

        leftsum += arr[i];
    }

    /* If no equilibrium index found, then return 0 */
    return -1;
}

// Driver code

arr = new Array(-7, 1, 5, 2, -4, 3, 0);
n = arr.length;
console.log(equilibrium(arr, n))
