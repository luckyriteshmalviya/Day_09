// Find first duplicate element from an array

// let arr = [1, 3, 6, 3, 1];

let arr = [1, 3, 2, 2, 3, 5, 5, 1];
function firstDuplicate(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (res.includes(arr[i])) {
      res.push(arr[i]);
      return res;
    }
    res.push(arr[i]);
  }
}
console.log(firstDuplicate(arr));
