
let s ="hello";
console.log(s.split(""));

// [ 'h', 'e', 'l', 'l', 'o' ]
 
// CONVERT STRING TO ARRAY
s=s.split("");
console.log(s);

// CONVERT ARRAY TO STRING ORIGINAL
s= s.join("");
console.log(s);



/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    
s = s.split("");
for(let x=0;x<s.length;x = x+(k*2))
{
    let n=k;
    let mid = Math.floor(n/2);
    for(let i=0;i<mid;i++)
    {

let temp = s[x+i];
s[x+i] = s[x+k-1-i];
s[x+k-1-i] =temp;
    }
}

return s.join("");

};