var largestOddNumber = function(num) {
    let i = num.length - 1;

    while (i >= 0) {
        if (parseInt(num[i]) % 2 !== 0) {
            break;
        }
        i--;
    }

    if (i < 0) return "";

    // Manually build the result string from 0 to i
    let result = "";
    for (let j = 0; j <= i; j++) {
        result += num[j];
    }

    return result;
};





// IN-BUILT
/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    
    let i=num.length-1;
    while(i>=0)
    {
        if(num[i] %2 !==0)
        {
            // return num;
                return num.slice(0, i + 1);  
        }

        i--;


    }


    return "";
      }