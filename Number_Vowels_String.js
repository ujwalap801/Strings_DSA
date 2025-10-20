/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    let arr = ['a', 'e', 'i','o','u'];

let count =0;
    for(let i=left;i<=right;i++)
    {  
        let word = words[i];
        if(arr.includes(word[0]) && arr.includes(word[word.length-1]))
        {
       count++;
        }

    }
    
    return count;
};