const numberRangeReursive = (a, b, arr = []) => {
  if (a > b) {
    return arr;
  }
  arr.push(a);
  console.log(arr);
  
  return numberRangeReursive(a + 1, b,arr);
};
console.log(numberRangeReursive(3, 7));
