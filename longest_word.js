const findLongestWord = (str) => {
  if (str.trim().length === 0) {
    return false;
  }
  words = str.split(" ");
  // words = words.sort((a, b) => a.length - b.length);
  // return words.at(-1);

  
  return words.reduce(
    (accum,curWord)=>(curWord.length>accum.length ? curWord : accum)," ")
};

console.log(
  findLongestWord("Watch Thapa Technical javascript course on youtube"),
);
