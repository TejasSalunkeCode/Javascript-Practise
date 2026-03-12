function validatePassword(password){
    const regex=/^(?=.*[A-Z])(?=.*[\d])(?=.*[\W_]).{8,}$/;
    return regex.test(password);
}

console.log(validatePassword("Pass123!"));
console.log(validatePassword("12345678"));
console.log(validatePassword("Password"));

