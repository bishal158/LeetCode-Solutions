const isValid = (s) => {
  let openingBrackets = [];
  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      openingBrackets.push(char);
    } else {
      if (
        !openingBrackets.length ||
        (char === ")" && openingBrackets[openingBrackets.length - 1] !== "(") ||
        (char === "}" && openingBrackets[openingBrackets.length - 1] !== "{") ||
        (char === "]" && openingBrackets[openingBrackets.length - 1] !== "[")
      ) {
        return false;
      }
      openingBrackets.pop();
    }
  }
  return !openingBrackets.length
};
console.log(isValid("(){]}"))
