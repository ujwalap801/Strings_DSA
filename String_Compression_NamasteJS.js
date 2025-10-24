function compressString(str) {
  //write implementation here
  if (!str) return "";

  let result = [];

  let i = 0;
  while (i < str.length) {
    let ch = str[i];
    let count = 0;
    while (i < str.length && str[i] == ch) {
      count++;
      i++;
    }


    while (count > 9) {

      result.push(ch);
      result.push(9);
      count -= 9;

    }

    if (count === 1) {
      let last = result[result.length - 1];
      if (last == 9) {
        result.push(ch);
        result.push(count);
      } else {

        result.push(ch);
      }

    } else {
      result.push(ch);
      result.push(count);
    }
  }

    return result.join("")
  
}

compressString("aaabbbccccccccccc")
module.exports = compressString;
