// Uppercase of each first letter of a words.
let str = "my name is ritesh.";

function Uppercase(str) {
  let newstr = str.split("");
  let firstchar = str.charCodeAt(0);
  if (firstchar > 96) {
    newstr.splice(0, 1, String.fromCharCode(firstchar - 32));
  }
  for (let i = 0; i < newstr.length; i++) {
    if (newstr[i] === " " && str.charCodeAt(i + 1) > 96) {
      let oldchar = str.charCodeAt(i + 1);
      newstr.splice(i + 1, 1, String.fromCharCode(oldchar - 32));
    }
  }
  let res = newstr.join("");
  return res;
}
console.log(Uppercase(str));
