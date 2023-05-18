/**
 * @param {string} s
 * @return {boolean} {()}[]
 */
var isValid = function (s) {
  let pair = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  let ar = [];
  for (let i of s) {
    if (i === "(" || i === "{" || i === "[") {
      ar.push(i);
    }
    if (i === ")" || i === "}" || i === "]") {
      if (pair[i] === ar.pop()) {
        continue;
      } else {
        return false;
      }
    }
  }
  if (ar.length === 0) {
    return true;
  }
  return false;
};
console.log(isValid("{()}[]"));
//i am here
console.log("hi");
