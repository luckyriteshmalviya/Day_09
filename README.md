# Day_09
Solution of day_08 from 24 days GitHub question series.
  
  
## To find unique values from 2 arrays and keep into one array.    
  
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




## Find first duplicate element from an array  
  
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



## Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz"  
  
function FizzBuzz() {  
  for (let i = 1; i <= 100; i++) {  
    if (i % 3 === 0 && i % 5 === 0) {  
      console.log("FizzBuzz");  
      continue;  
    } else if (i % 3 === 0) {  
      console.log("Fizz");  
      continue;  
    } else if (i % 5 === 0) {  
      console.log("Buzz");  
      continue;  
    } else console.log(i);  
  }  
}  
FizzBuzz();  
 
 
 
 
 ##  Uppercase of each first letter of a words.  
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




##  Uppercase of each first letter of a words using Array map function     
  
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


