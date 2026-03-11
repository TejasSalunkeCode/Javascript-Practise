const calcAge=(d1)=>{
    const dob = new Date(d1);
    const date= new Date();
    console.log(date);
    let age=date.getFullYear()-dob.getFullYear();
    // console.log(age);
    let monthDiff=date.getMonth()-dob.getMonth();
    if(monthDiff<0 || (monthDiff===0 && date.getDate()<dob.getDate())){
        age--;
    }
    return age;
}
console.log(calcAge("2005-11-13"));
