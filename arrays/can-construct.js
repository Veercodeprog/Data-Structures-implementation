// m = target.length
// n = wordbank.length
// problem statemnt is can we make the target word from using different strings or string from word array .if yes return true else false

// time: Object(n ^ m * m ) as n branching to m levels in tree .so n^m and multiply by m as we are slicing the target on matching prefxes
// space: O(m^2) i.e. heoght of tree ie.e maximum no. of stack frames we need on call stacks before we bought them out on base case multiply by m as we are slicing a target and worst case we have to slice it  m times.

const canConstruct = (target, wordbBank) => {
    if (target === '') {
        return true;
    }

    for (let word of wordbBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if (canConstruct(suffix, wordbBank) === true) {
                return true;
            }
        }
    }
    return false;
}
const word = ['df', 'ab', 'def', 'cd', 'c', 'fg', 'g']
console.log(canConstruct('abcdefg', word))


// time: O(n * m^2)
// space: O(m^2)


const canConstructMemo = (target, wordbBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === '') {
        return true;
    }

    for (let word of wordbBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if (canConstructMemo(suffix, wordbBank, memo) === true) {
                memo[target] = true;
                // memo[target] = canConstruct(suffix, wordbBank)
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
}
const w = ['df', 'ab', 'def', 'cd', 'c', 'fg', 'g']
console.log(canConstructMemo('abcdefg', w))



// time: O(m^2*n)
//space: O(m)
const canConstructTab = (target, wordbBank) => {
    const table = Array(target.length + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= target.length; i++) {
        if (table[i] === true) {
            for (let word of wordbBank) {
                if (target.slice(i, i + word.length) === word) {
                    table[i + word.length] = true;
                }
            }
        }
    }

    return table[target.length]
}

const w1 = ['df', 'ab', 'def', 'cd', 'c', 'fg', 'g', 'efg']
console.log(canConstructTab('abcdefg', w1))
const w5 = ['df', 'ab', 'def', 'cd', 'c', 'fg', 'g']
console.log(canConstructTab('abcdefg', w5))
