/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    
    let map ={};
    let result ="";
    let count =0;
    for(let i=0;i<s.length;i++)
    {
        if(!map[s[i]]) {
            map[s[i]] = 1
        }else{
            map[s[i]]++
        }
    }



for(let j=0;j<order.length;j++)
{

    let ch =order[j]
    if(map[ch] >0)
    {
        
        result = result +ch.repeat(map[ch]);
     
        map[ch] =0;
    }
}


for(let key in map)
{
    if(map[key] >0)
    {
        result = result + key.repeat(map[key])
    }
}

// console.log(map)
return result;
    // console.log(map)
};



// same logic
/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    
    let result =[];

    let count =0;
    let map ={};
for(let i=0; i<s.length;i++)
{
    if(!map[s[i]])
    {
        map[s[i]] =1;
    }else{
        map[s[i]]++;
    }
    
}

// console.log(map)


for(let j =0;j<order.length;)

{

    if(map[order[j]] >0)
    {
       result.push(order[j]);
        count++;
        map[order[j]]--

    }
    else{
        j++;
    }
v
}



for(let key in map)
{
    while (map[key] > 0) {
 result.push(key)
    map[key]--; 
  }
}

return result.join("");
};