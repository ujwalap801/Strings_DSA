var countVowelSubstrings = function(word) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let n = word.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        let seen = new Set();

        for (let j = i; j < n; j++) {
            let ch = word[j];

            if (!vowels.has(ch)) {
                break; // stop if non-vowel found
            }

            seen.add(ch);

            // valid substring if all 5 vowels are present
            if (seen.size === 5) {
                count++;
            }
        }
    }

    return count;
};
