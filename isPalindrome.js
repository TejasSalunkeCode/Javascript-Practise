const isPalindrome=(str)=>{
    str=str.toLowerCase().replace(/\W/g,"");
    let revstr=str.split("").reverse().join("");
    console.log(revstr);
    return str===revstr ? true : false;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man, a plan, a canal, panama"));
