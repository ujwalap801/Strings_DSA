function reverseString(s) {
   s.split('');
    console.log(s);
   
    let n = Math.floor(s.length / 2);
    for (let i = 0; i < n; i++) {
        let temp = s[i];
        s[i] = s[s.length - 1 - i];
        s[s.length - 1 - i] = temp;
    }

    return s.join('');
}



let s = "hello";
console.log(reverseString(s));  // Output: "olleh"


let s1 = "ho";
 // Output: "olleh"

function reverseString(s1) {
  
    return s1.split('').reverse().join('');
}

console.log(reverseString(s1)); 


function reverseString2(s2) {
  
    let n = Math.floor(s2.length / 2);
    for (let i = 0; i < n; i++) {
        let temp = s2[i];
        s2[i] = s2[s2.length - 1 - i];
        s2[s2.length - 1 - i] = temp;
    }


    return s2;
}
let s2 =['h','e','l','l','o'];
console.log(reverseString2(s2));
