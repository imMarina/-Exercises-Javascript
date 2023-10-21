// Задача 6.6*
// Выведете большую и меньшую цифры числа x

// Большая цифра 8
// Меньшая цифра 1

// method string 
let numberX = 13817
let divider = 10;
let digit = 0;
let max = 1;
let min = 9;

while (numberX >= 1) {

    let lastNum = numberX.toString().slice(-1);
  	
  	if (lastNum > max) {
    max = lastNum;
    }
    if (lastNum < min) {
    min = lastNum;
    }
  
    numberX = Math.floor(numberX / divider);
    digit++;
}
console.log(`Max number is ${max}`); // Max number is 8
console.log(`Min number is ${min}`); // Min number is 1

// with % 
let numberX = 13817
let divider = 10;
let digit = 0;
let max = 1;
let min = 9;

while (numberX >= 1) {

    let num = numberX % divider;

    if (num > max) {
    max = num;
    }
    if (num < min) {
    min = num;
    }

    numberX = Math.floor(numberX / divider);
    digit++;
}

console.log(`Max number is ${max}`); // Max number is 8
console.log(`Min number is ${min}`); // Min number is 1