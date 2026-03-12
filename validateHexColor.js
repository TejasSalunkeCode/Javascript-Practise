const validatHexColor=(hex)=>{
    return /^#([A-Fa-f\d]{3}|[A-Fa-f\d]{6})$/.test(hex);
}

console.log(validatHexColor("#a3c113"));
console.log(validatHexColor("#fff"));
console.log(validatHexColor("#1234567"));
