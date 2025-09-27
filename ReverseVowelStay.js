let s="cloudthat";

function reverseString(s)
{
    s=s.split("");

   let l=0;

   let r =s.length-1;


   let vowels ="aeiou";

   while(l<r)
   {
    if(vowels.includes(s[l]))
    {
        l++;
    }
    else if(vowels.includes(s[r]))
    {
        r--;
    }else{
        let temp =s[l];
        s[l] =s[r];
        s[r] = temp;
        l++;
        r--;
    }
   }

return s.join("");

}

console.log(reverseString(s));

// USING MATCH

function reverseStringKeepVowels1(str) {
  let arr = str.split('');
  let left = 0, right = arr.length - 1;

  while (left < right) {
    if (arr[left].match(/[aeiou]/i)) {
      left++;
    } else if (arr[right].match(/[aeiou]/i)) {
      right--;
    } else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr.join('');
}

console.log(reverseStringKeepVowels("hello"));     // holle
console.log(reverseStringKeepVowels("developer")); // repevolde


// USING SET

function reverseStringKeepVowels(str) {
  let arr = str.split('');
  let vowels = "aeiouAEIOU";   // just a string of vowels
  let left = 0, right = arr.length - 1;

  while (left < right) {
    if (vowels.includes(arr[left])) {
      left++;
    } else if (vowels.includes(arr[right])) {
      right--;
    } else {
      // swap consonants
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr.join('');
}

// Example:
console.log(reverseStringKeepVowels("hello"));     // holle
console.log(reverseStringKeepVowels("developer")); // repevolde
console.log(reverseStringKeepVowels("abcde"));     // edcba



let s3 = "CLOUDTHAT";

function reverse(s) {
    s = s.toLowerCase().split("");

    console.log(s)

    let l = 0;
    let r = s.length - 1;
    while (l <= r) {
        if (s[l] =='a' || s[l] =='e' || s[l] =='i' ||s[l] =='o' ||s[l] =='u') {
            l++;
        }

          else  if (s[r] =='a' || s[r] =='e' || s[r] =='i' ||s[r] =='o' ||s[r] =='u') {
            r--;
        }
        else {
            let temp = s[l];
            s[l] = s[r];
            s[r] = temp;
            l++;
            r--;
        }


    }


    return s.join("");
}

console.log(reverse(s))