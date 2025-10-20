let s ="A man, a plan";

function validPalindrome(s)
{

    s=s.split('');

    for(let i=0;i<s.length;i++)
    {
        if(s[i] ===" ")
        {
            s[i]=s[i+1];
        }
    }

console.log(s);
    let n =s.length;
    let mid= Math.floor(n/2);
    for(let i=0;i<mid;i++)
    {
        let temp =s[i];
        s[i] =s[n-1-i];
        s[n-1-i] = temp;
    }
    return s.join("");

    // nalppaa,nammA
}

console.log(validPalindrome(s));

// USING BUILD IN FUNCTIONS
function nonAlpha(s)
{
   s=s.toLowerCase();
    let filteredString ="";
    for(let i=0;i<s.length;i++)
    {
        if(s[i].match(/[a-z0-9]/i))
        {
       filteredString = filteredString + s[i];
        }
    }

    // return filteredString;

    let rev = filteredString.split("").reverse().join("");
    return filteredString === rev;
    // amanaplan
}


console.log(nonAlpha(s));


// Approach -1
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let filteredString ="";
    let rev ="";
    for(let i=0;i<s.length;i++)
    {
        if(s[i].match(/[a-z0-9]/i))
        {
            filteredString = filteredString+ s[i];
            rev =s[i] +rev;
        }

    }

    return filteredString === rev;

};


// Apprach-2
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    s= s.toLowerCase();
    let i=0;
    let j= s.length-1;
    while(i<j)
    {
        if(!s[i].match(/[a-z0-9]/i))
        {
            i++;
        }else if(!s[j].match(/[a-z0-9]/i))
        {
            j--;
        }
        else if(s[i] === s[j])
        {
            i++;
            j--;
        }
        else{
          return false;
        }

    }

    return true;
};




 str = str.toLowerCase().match(/[a-z0-9]/gi) || []

 
    let i = 0;
    let j = str.length - 1;
    while (i < j)
    {
        if (str[i] !== str[j])
        {
            return false;
        }
        i++;
        j--;
    }

    return true;

    
// APPROACH-3

var largestOddNumber = function(num) {
    let i = num.length - 1;
    while(i>=0)
    {
        if(Number(num[i]) %2 ===1)
        {
            return num.substring(0, i+1);
        }

        i--;
    }

    return "";

};
