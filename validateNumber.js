const validateNumber=(number)=>{
    return /^[6-9][\d]{9}$/.test(number);
}

console.log(validateNumber("9860474445"));
console.log(validateNumber("986047445"));
console.log(validateNumber("4860474405"));
