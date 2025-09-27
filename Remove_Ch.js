let s = "aaabc@sad$hsagd^";

function remove(s)
{
    let count =0;
    for(let i=0;i<s.length;i++)
    {
        let ch = s[i];
        if(!s[i].match(/[a-zA-Z0-9]/i))
        {
            count++;
        }
    }

    return count;
}

console.log(remove(s));

// Here, s[i].match(/[a-zA-Z0-9]/i) works because .match() returns an array if it matches or null if it doesn’t.

// You negate it with ! to count invalid characters.

// USING TEST
let s1= "aaabc@sad$hsagd^";

function remove1(s) {
    let count = 0;
    const regex = /[a-zA-Z0-9]/i; // define regex once
    for (let i = 0; i < s.length; i++) {
        if (!regex.test(s[i])) {
            count++;
        }
    }
    return count;
}

console.log(remove1(s1));

// .test() returns true or false directly — no array creation.

// Slightly faster, especially for long strings.


let s2 = "a@b$c";

for (let i = 0; i < s2.length; i++) {
    let ch = s2[i];
    const result = ch.match(/[a-zA-Z0-9]/i);
    console.log(ch, result);
}


// WITH SPACES
let s4 = "aa abc@ sad$ hsagd^";

function countMissesTest(s4) {
  let count = 0;
  const valid = /[a-zA-Z0-9 ]/; // letters, numbers, space

  for (let i = 0; i < s4.length; i++) {
    if (!valid.test(s4[i])) {
      count++;
    }
  }

  return count;
}

console.log(countMissesTest(s4)); // Output: 3


let s5= "aa abc@ sad$ hsagd^";

function countMissesMatch(s5) {
  // Match all invalid characters at once
  const invalidChars = s5.match(/[^a-zA-Z0-9 ]/g);
  console.log(invalidChars);
  return invalidChars ? invalidChars.length : 0;
}

console.log(countMissesMatch(s5)); // Output: 3
