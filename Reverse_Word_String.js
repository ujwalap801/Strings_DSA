/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

    s= s.trim().split(/\s+/);
    let n = s.length-1;
    let rev =[];
    for(let i=n; i>=0;i--)
    {
        rev.push(s[i]);

    }

    return rev.join(" ");
    
};