const isEmpty = (obj) => {
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       return `it's not empty`;
//     }
//   }
//   return `it' empty`;

return Object.keys(obj).length===0;
};

console.log(isEmpty({ name: "tejas" }));
console.log(isEmpty({}));
