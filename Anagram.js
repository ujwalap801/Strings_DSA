function valid(s1, s2) {
    if (s1.length !== s2.length) return false;

    let map = {};

    // Count characters in s1
    for (let i = 0; i < s1.length; i++) {
        let char = s1[i];
        // map[char] = (map[char] || 0) + 1;

        if (map[char]) {
            map[char] = map[char]++;
        } else {
            map[char] = 1;
        }

    }

    // Subtract counts using s2
    for (let j = 0; j < s2.length; j++) {
        let char = s2[j];
        if (!map[char]) {
            return false;
        }
        map[char]--;
    }

    return true;
}


let s1 = "dog";
let s2 = "goi";

let s3 = "silent";
let s4 = "listen";

console.log(valid(s1, s2)); // false
console.log(valid(s3, s4)); // true
