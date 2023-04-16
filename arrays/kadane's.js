var maxSubarraySumCircular = function(nums) {
    let local_max = 0;
    let global_max = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        local_max = Math.max(nums[i], nums[i] + local_max);
        if (local_max > global_max) {

            global_max = local_max;
        }

    }
    return global_max;
};
let n2 = [5, -3, 5]
console.log(maxSubarraySumCircular(n2))
