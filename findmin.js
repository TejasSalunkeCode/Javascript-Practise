const findmin = (arr) => {
  if (arr.length == 0) {
    return 0;
  }
//   let min = arr[0];

//   let val = arr.reduce((accum, currval) => {
//     return accum >= currval ? currval : accum;
//   }, arr[0]);

//   console.log(val);

//   return val;

// let arr2= arr.sort((a,b)=>a-b)
// return arr2[0];
// };

    return Math.min(...arr);
}
console.log(findmin([5, 10, 2, 8]));
