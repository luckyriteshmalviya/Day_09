// Uppercase of each first letter of a words.

/**
 * Step 01 - Create a function - Uppercase.
 * Step 02 - Now split the string to make it array.
 * Step 03 - Make an iteration on the array.
 * Step 04 - Check for a if condition that the current index is a space and next index has ascii code greater than 96.
 * Step 05 - If yes than check tha ascii code of that number.
 * Step 06 - Replace that cahracter with uppercase character by using ascii code.
 * Step 07 - Now join the array to make it string again.
 * Step 08 - A exceptional should be handle before Step 03.
 * Step 09 - That to check the first character is uppercase or lowercase.
 * Step 10 - If it is lower case than replace it with uppercase.
 */

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
