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