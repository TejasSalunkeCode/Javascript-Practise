const passwordvalid=(password)=>{
    let hasLowercase=false;
    let hasUppercase=false;
    let hasNumber=false;
for(let char of password){
    // console.log(char);
    if(char.charCodeAt(0)>=65 && char.charCodeAt(0)<=90){
        hasUppercase=true;
    }else if(char.charCodeAt(0)>=97 && char.charCodeAt(0)<=122){
        hasLowercase=true;
    }else if(!isNaN(Number(char))){
        hasNumber=true;
    }
}
if(!hasLowercase || !hasUppercase || !hasNumber){
    return false;
}
return true;
}
console.log(passwordvalid("asdfghjt"));
console.log(passwordvalid("aGdfghjt"));
console.log(passwordvalid("a4dfghjt"));
console.log(passwordvalid("a4dfHhjt"));
