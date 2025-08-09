var isAnagram = function(s, t) {

    console.log(s.split(""));
    // [ 'a', 'n', 'a','g', 'r', 'a','m']

    console.log(s.split("").sort());

    // ['a', 'a', 'a','g', 'm', 'n',  'r']

    console.log(s.split("").sort().join(""))
    // aaagmnr

    return s.split("").sort().join("") ===  t.split("").sort().join("")
    
    
};


let s ="anagram";
let t="nagaram"
console.log(isAnagram(s,t))


    const fruits = ["banana", "apple", "cherry"];
    fruits.sort();
    console.log(fruits); // Output: ["apple", "banana", "cherry"]




    /**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

if(s.length != t.length) return false;

let map ={};
for(let i=0;i<s.length;i++)
{
    let ch =s[i];
    if(!map[ch])
    {
        map[ch] =1;
    }
    else{
        map[ch]++;
    }
}

for(let i=0;i<t.length;i++){

let ch=t[i];
if(!map[ch] || map[ch] <0)
{
    return false;
}
else{
    map[ch]--;
}


}


return true;
};