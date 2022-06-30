// To find unique values from 2 arrays and keep into one array.

let arr01 = [3, 45, 42, 29, 45, 19];
let arr02 = [45, 7, 01, 29, 42, 63, 1, 9];

function uniqueValue(arr01, arr02) {
  let res = [...arr01, ...arr02];
  for (let i = 0; i < res.length; i++) {
    for (let j = i + 1; j < res.length; j++) {
      if (res[i] === res[j]) {
        res.splice(j, 1);
      }
    }
  }
  console.log(res);
}
uniqueValue(arr01, arr02);
