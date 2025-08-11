/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapST = {};
    let mapTS ={};

    for(let i=0;i<s.length;i++)
    {
        if(!mapST[s[i]] && !mapTS[s[i]])
        {
            mapST[s[i]] = t[i];
             mapTS[t[i]] = s[i];
        }
        else if(mapST[s[i]] !== t[i] || mapTS[t[i]] !== s[i])
        {
        return false;
        }
    }

    return true;
    
};