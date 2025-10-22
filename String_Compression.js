/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {

let x =0;
let i = 0;
while(i < chars.length)
{
    let ch = chars[i];
    let count =0;

    while(i < chars.length && chars[i] === ch)
    {
        count++;
        i++;
    }

    chars[x] = ch;
    x++;
    if(count >1)
    {
        let str = count.toString();
        for(let digit of str)
        {
            chars[x] = digit;
            x++;
        }
    }
}


return x;
    
}