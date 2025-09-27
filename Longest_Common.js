/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return "";

    let x = 0;
    while (x < strs[0].length) {
        let chr = strs[0][x];

        for (let i = 1; i < strs.length; i++) {
            // first check if index is out of range or character doesn't match
            if (x >= strs[i].length || strs[i][x] !== chr) {
                return strs[0].substring(0, x);
            }
        }
        x++;
    }
    return strs[0];
};

// Test cases
let s = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(s));  // "fl"

let s1 = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(s1)); // ""



console.log({}+[]);

console.log([]+{});


let a =[1, 2, 3];
let b=a;

b.push(4);
console.log(a);



// Case 2: ["dog", "racecar", "car"]

// if (!strs.length) → false (length = 3).

// x = 0

// chr = strs[0][0] = 'd'

// Compare with strs[1][0] = 'r' → mismatch immediately

// Return strs[0].substring(0,0) → ""

// Output: "" (empty string)