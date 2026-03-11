const calculateDays=(d1,d2)=>{
    let date=new Date(d1);
    let Date2=new Date(d2);
    let diff=Math.abs(date-Date2);
    return diff/(24*60*60*1000);
}
console.log(calculateDays("2024-01-05","2024-01-31"));//op 26
