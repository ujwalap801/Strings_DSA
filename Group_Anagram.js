/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(s) {
    let map={};
    for(let i=0;i<s.length;i++)
    {
        let sortedStr = s[i].split("").sort().join("");
      console.log([s[i]]);
      
        if(!map[sortedStr])
        {
            map[sortedStr] = [s[i]];
        }
        else{

            map[sortedStr].push(s[i]);
        }
    }

    return [...Object.values(map)];

    
};

let strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(strs));



/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams1 = function(s) {
    let map={};

    for(let i=0;i<s.length;i++)
    {

    let arr = Array(26).fill(0);
let str = s[i];
for(let j=0;j<str.length;j++)
{
    let index = str[j].charCodeAt() -'a'.charCodeAt();
    arr[index]++;
}

let key ="";
for(let k=0;k<26;k++)
{
    // key= key+String.fromCharCode(k)+arr[k];

      key= key+"#"+arr[k];
    //   both same same purpose we can use anything just like delimiters

}

console.log(key);

if(!map[key])
{
    map[key] = [str];
    }
    else{
        map[key].push(str);
    }

    }
return [...Object.values(map)];
    
};




let strs1= ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams1(strs1));
