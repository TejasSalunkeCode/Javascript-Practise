const extractNumbers=(str)=>{
    let regex=/\d+/g;
    return str.match(regex);
}

console.log(extractNumbers("abc123def46ghi789"));
console.log(extractNumbers("1a2b3c4d"));
