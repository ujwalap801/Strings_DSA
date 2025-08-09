/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let x =0;
    while(x<strs[0].length)
    {
        let chr = strs[0][x];
    
    for(let i=1;i<strs.length;i++)
    {
        if(chr !=strs[i][x] || x===strs[i].length)
        {
            return strs[0].substring(0,x);
        }
      
    }
    x++;

    }
    
    return strs[0];
};

let s ="dog";
console.log("hi")
s=s.substring(0,0);
console.log(s);