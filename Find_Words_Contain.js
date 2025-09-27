/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */

// USING BUILD IN FUNCTION
var findWordsContaining = function(words, x) {
    let res=[];
    for(let i=0;i<words.length;i++)
    {
        if(words[i].includes(x))
        {
           res.push(i);
        }
    }

    return res;
    
};

// USING ITERATIVE APPROACH

/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let res=[];
    for(let i=0;i<words.length;i++)
    {

        for(let j=0;j<words[i].length;j++)
        {
            if(words[i][j] ===x)
            {
                res.push(i);
                break;
            }
        }
        // if(words[i].includes(x))
        // {
        //    res.push(i);
        // }
    }

    return res;
    
};



// USING MATCH BY CREATING REGULAR EXPRESSION
/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    /**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */

    
    let n = words.length;
    let ans =[];
    for(let i=0;i<n;i++)
    {
        let charWord = words[i];
        for(let j=0;j<charWord.length ;j++)
        {

            let regex = new RegExp(x);
            if(charWord[j].match(regex))
            {
                  ans.push(i);
                  break;
            }
        }
    }

    return ans;

}