const repeatString = (str, num) => {
//   let ans = "";
//   if (num == 1) {
//     return str;
//   } else {
//     return (str = str + repeatString("abc", num - 1));
//   }

return str.repeat(5);

};
console.log(repeatString("abc", 5));
