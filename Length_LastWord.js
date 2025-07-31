// USING BUILT IN METHOD

var lengthOfLastWord = function(s) {
    s= s.trim();
    console.log("after trim: "+s);

    s= s.split(" ");

    console.log("after split: "+s);

    console.log(s[s.length-1]);

    return s[s.length-1].length;
    
};




/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord1 = function(s) {
   let n = s.length -1;
   while(n>=0)
   {
    if(s[n] !=" ")break;
    --n;
   }

   let count =0;
   while(n>=0)
   {
    if(s[n] ===" ") break;
    --n;
    ++count;
   }

   return count;
};


console.log(lengthOfLastWord1("Hello World"))

console.log(lengthOfLastWord1("   fly me   to   the moon  "))


// APPROACH-3
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let n = s.length-1;
  let count =0;
  while(n>=0)
  {
    if(s[n] != " ")
    {
        count++;
    }
    else if(count >0)
    {
        break;
    }
    n--;
  }


  return count;
};