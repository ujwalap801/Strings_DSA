function Primes(num) { 

  // code goes here  
  if (num<=1) return "false";
  if(num === 2) return "true";

  if(num %2 ===0) return "false";

  let oddNum = Math.sqrt(num);
  for(let i=3;i<=oddNum;i+=2)
  {
    if(num % i===0) return "false";
  }
  
  return "true"; 
}




// count of w
function countW(str) {
    let count = 0;
    for (let char of str) {
        if (char.toLowerCase() === 'w') {
            count++;
        }
    }
    return count;
}

// Example usage:
console.log(countW("Wow, what a wonderful world!")); // Output: 4


// In Javascript write a function that takes a string, splits the string by dots (.) and returns the second last string from that split. If there are no dots in the original string return an empty string. For example the parameter "ggg.ttt.com", the function returns "ttt".


function getSecondLast(str) {
    // Split by dot
    const parts = str.split('.');
    
    // If no dot or only one part, return empty string
    if (parts.length < 2) {
        return '';
    }
    
    // Return the second last element
    return parts[parts.length - 2];
}

// Example usage:
console.log(getSecondLast("ggg.ttt.com")); // Output: "ttt"
console.log(getSecondLast("example.com")); // Output: "example"
console.log(getSecondLast("nodots"));      // Output: ""


// In Javascript write a function that will remove the matching double quotes (") or single quotes (') at the beginning and end of a string if they are present. For example if the string 'stringi' is passed in, it will return string1, if 'string1 is passed in, it returns 'string1 (quote not removed).

function removeMatchingQuotes(str) {
    if (
        (str.startsWith('"') && str.endsWith('"')) ||
        (str.startsWith("'") && str.endsWith("'"))
    ) {
        return str.slice(1, -1);
    }
    return str;
}

// Example usage:
console.log(removeMatchingQuotes("'string1'")); // Output: string1
console.log(removeMatchingQuotes('"string1"')); // Output: string1
console.log(removeMatchingQuotes("'string1"));  // Output: 'string1
console.log(removeMatchingQuotes('string1"'));  // Output: string1"
