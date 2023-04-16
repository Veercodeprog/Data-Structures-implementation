function minimumPlatformsTab(arrival, departure) {
    const maxTime = Math.max(...departure);
    const dp = Array(maxTime + 1).fill(0);
    for (let i = 0; i < arrival.length; i++) {
        dp[arrival[i]]++;
        dp[departure[i]]--;
    }

    let maxPlatforms = 0;
    let platforms = 0;
    for (let i = 0; i <= maxTime; i++) {
        platforms += dp[i];
        maxPlatforms = Math.max(maxPlatforms, platforms);
    }
    return maxPlatforms;
}


const arr1 = [900, 940, 950, 1100, 1500, 1800];
const arr2 = [910, 1200, 1120, 1130, 1900, 2000];
console.log(minimumPlatformsTab(arr1, arr2))

function minimumPlatforms(arrival, departure) {
    arr = arrival.sort((a, b) => a - b);
    dep = departure.sort((a, b) => a - b);
    n = arr.length;
    let i = 1,
        j = 0;
    let platforms = 1;
    let result = 1;
    while (i < n && j < n) {

        if (arr[i] <= dep[j]) {
            platforms++;
            i++;
        } else if (arr[i] > dep[j]) {
            platforms--;
            j++;
        }
        if (platforms > result) {
            result = platforms;
        }
    }
    return result;
}

const arr12 = [900, 940, 950, 1100, 1500, 1800];
const arr22 = [910, 1200, 1120, 1130, 1900, 2000];
console.log(minimumPlatforms(arr12, arr22))



function findPlatform(arr, dep) {

    // Sort arrival and
    // departure arrays
    arr = arr.sort((a, b) => a - b);
    dep = dep.sort((a, b) => a - b);
    n = arr.length;

    // plat_needed indicates
    // number of platforms
    // needed at a time
    let plat_needed = 1;
    let result = 1;
    let i = 1;
    let j = 0;

    // Similar to merge in
    // merge sort to process
    // all events in sorted order
    while (i < n && j < n) {

        // If next event in sorted
        // order is arrival, increment
        // count of platforms needed
        if (arr[i] <= dep[j]) {
            plat_needed++;
            i++;
        }

        // Else decrement count
        // of platforms needed
        else if (arr[i] > dep[j]) {
            plat_needed--;
            j++;
        }

        // Update result if needed
        if (plat_needed > result)
            result = plat_needed;
    }

    return result;
}


console.log(findPlatform(arr12, arr22))
