const hashtageGenerator = (str) => {
    if (str.length > 200 || str.trim().length === 0) {
        return false;
    }

    str = str.split(" ");

    str = str.map((currEle) =>
        // currEle[0].toUpperCase() + currEle.slice(1)
    currEle.charAt(0).toUpperCase()+currEle.slice(1));

    str = `#${str.join("")}`;

    return str;
};

console.log(
  hashtageGenerator("my name is tejas salunke")
);