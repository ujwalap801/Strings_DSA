/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    const freq = {};
    const visited = {};
    const stack = [];

    // count frequency of each character
    for (let char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }

    for (let char of s) {
        freq[char]--; // one occurrence used

        // skip if already in stack
        if (visited[char]) continue;

        // maintain increasing order
        while (
            stack.length > 0 &&
            char < stack[stack.length - 1] &&
            freq[stack[stack.length - 1]] > 0
        ) {
            visited[stack.pop()] = false;
        }

        stack.push(char);
        visited[char] = true;
    }

    return stack.join('');
};
