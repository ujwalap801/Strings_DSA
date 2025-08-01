// BRUTE FORCE APPROACH
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    
    let n = jewels.length;
    let m = stones.length;
    let count =0;

    for(let i =0;i<n;i++)
    {
        for(let j=0;j<m;j++)
        {
            if(jewels[i] === stones[j])
            {
                           count++;
            }
        }
    }

    return count>0?count: 0;
};

// INCLUDES
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    
    let count =0;

    for(let i =0;i<stones.length;i++)
    {
      if(jewels.includes(stones[i]))
      {
        count++;
      }
    }

    return count;
};


// OPTIMIZE
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {

    let jSet = new Set();
    for(let i=0;i<jewels.length;i++)
    {
        jSet.add(jewels[i]);
    }
   

let count =0;
for(let i=0;i<stones.length;i++)
{
    if(jSet.has(stones[i]))
{
    count ++;
}}


return count;
};