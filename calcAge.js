const calcAge=(d1)=>{
    const dob = new Date(d1);
    const date= new Date();
    console.log(date);
    return date-dob/24*60;
}
console.log(calcAge("1990-05-15"));
