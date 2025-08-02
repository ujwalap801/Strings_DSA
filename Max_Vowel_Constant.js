// COMPLEXITY 0(N)
var maxFreqSum = function(s) {
    
    // store allthe values with freq in a map

    let hashMap ={};
    for(let i=0;i<s.length;i++)
    {
    // {
    //     if(!hashMap[s[i]])
    //     {
    //         hashMap[s[i]] =1;
    //     }
    //     else{
    //         hashMap[s[i]]++;
    //     }
   hashMap[s[i]] = !hashMap[s[i]] ? 1 :++hashMap[s[i]]
       

    }

    console.log(hashMap);
    // { s: 4, u: 1, c: 2, e: 2 }

    // FIND THE MAX VOWEL AND CONSTANT INSIDE THE MAP
    
let vowels =['a','e','i','o','u'];

    let maxVowel =0;
let maxCon=0;
let mapKeys = Object.keys(hashMap);
for(let i=0;i<mapKeys.length;i++)
{
// vowels
if(vowels.includes(mapKeys[i]))
{
    //   maxVowel = Math.max(maxVowel,hashMap[mapKeys[i]])
    if(hashMap[mapKeys[i]] >maxVowel)
    {
        maxVowel = hashMap[mapKeys[i]];
    }
}
else{
    // maxCon = Math.max(maxCon,hashMap[mapKeys[i]])
       if(hashMap[mapKeys[i]] >maxCon)
    {
        maxCon = hashMap[mapKeys[i]];
    }
}
}


return maxVowel+maxCon;
};



console.log(maxFreqSum("successes"));


// BECUASE WE ARE ITERATING 2 SECOND LOOP IS FOR 26 LETTERS
// T =O(n)
// s=O(1)


// s[i] is the key

// hashMap[s[i]] gives you the value associated with that key

// This is standard JavaScript object behavior



// USING TIME COMPLEXITY 0(N*M)

var maxFreqSum1 = function(s) {
    
    // store allthe values with freq in a map

    let hashMap ={};
    for(let i=0;i<s.length;i++)
    {
        hashMap[s[i]] = !hashMap[s[i]] ? 1 :++hashMap[s[i]]
       
    }


    // FIND THE MAX VOWEL AND CONSTANT INSIDE THE MAP
    
let vowels =['a','e','i','o','u'];

    let maxVowel =0;
let maxCon=0;
// let mapKeys = Object.keys(hashMap);
for(let i=0;i<s.length;i++)
{
// vowels
if(vowels.includes(s[i]))
{
    maxVowel = Math.max(maxVowel,hashMap[s[i]])
    // if(hashMap[mapKeys[i]] >maxVowel)
    // {
    //     maxVowel = hashMap[mapKeys[i]];
    // }
}
else{
    maxCon = Math.max(maxCon,hashMap[s[i]])
    //    if(hashMap[mapKeys[i]] >maxCon)
    // {
    //     maxCon = hashMap[mapKeys[i]];
    // }
}
}


return maxVowel+maxCon;
};


console.log(maxFreqSum1("successes"));





// WITHOUT INCLUDES as array iteration
var maxFreqSum2 = function(s) {
    
  
    let hashMap ={};
    for(let i=0;i<s.length;i++)
    {
        hashMap[s[i]] = !hashMap[s[i]] ? 1 :++hashMap[s[i]]
       
    }


 
let vowels =['a','e','i','o','u'];

let maxVowel =0;
let maxCon=0;

for(let i=0;i<s.length;i++)
{
// vowels
 let ch = s[i];
        
        // Manual vowel check without includes()
        if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
    maxVowel = Math.max(maxVowel,hashMap[s[i]])

}
else{
    maxCon = Math.max(maxCon,hashMap[s[i]])
    
}
}


return maxVowel+maxCon;
};


console.log(maxFreqSum2("successes"));


// WITH SET
var maxFreqSum3= function(s) {
    let hashMap = {};

    for (let i = 0; i < s.length; i++) {
        hashMap[s[i]] = !hashMap[s[i]] ? 1 : ++hashMap[s[i]];
    }

    let vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);

    let maxVowel = 0;
    let maxCon = 0;

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        if (vowelSet.has(ch)) {
            maxVowel = Math.max(maxVowel, hashMap[ch]);
        } else {
            maxCon = Math.max(maxCon, hashMap[ch]);
        }
    }

    return maxVowel + maxCon;
};


console.log(maxFreqSum3("successes"));
