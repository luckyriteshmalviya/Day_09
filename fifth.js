// Uppercase of each first letter of a words using Array map function

let str = " Hi, this is my country - India. ";
function upperCaseFirsstLetter(str) {
  str = str.trim().split(" ");
  let res = str.map(function elem(item) {
    let first = item[0].toUpperCase();
    first = item.replace(item[0], first);
    return first;
  });
  res = res.join(" ");
  return res;
}
console.log(upperCaseFirsstLetter(str));
