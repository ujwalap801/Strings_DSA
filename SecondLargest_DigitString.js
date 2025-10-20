/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    s = s.match(/[0-9]/g) || [];
      if (s.length === 0) return -1
    let firstMax = -Infinity;
    let secondMax= -Infinity;
    s = s.map(n =>Number(n))

    for(let i=0;i<s.length;i++)
    {
        if(s[i] > firstMax)
        {
            secondMax = firstMax;
            firstMax = s[i];
        }else if(s[i] > secondMax && s[i] != firstMax)
        {
            secondMax = s[i];
        }
    }

    return secondMax == -Infinity?-1 : secondMax;
    
};