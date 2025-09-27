let n = "121121";


function palindrome(n)
{
    let start = 0;
    let end =n.length -1;
    while(start<end)
    {
        if(n[start] === n[end])
        {
            start++;
            end--
        }
        else{
            return false;
        }
    }

    return true
}


console.log(palindrome(n));