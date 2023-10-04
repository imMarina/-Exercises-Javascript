/*
let reduceArray = array.reduce(function (previousValue, item, index, array) {
    return item + previousValue;
  }, 0);
  console.log(reduceArray);
  
  // second option 
  
  function calculateTotal(number) {
      let sum = 0;
      for (let i = 1; i <= number; i++) {
        sum += i;
      }
      return sum;
    }
    console.log(calculateTotal(100))

    //Задание 7
// Выведите сумму всех элементов массива используя цикл for
const numbers = [1, 2, 3, 4, 5];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
console.log(sum);

*/

// Задание 1
// Выведите n первых членов последовательности Фибоначчи, где каждый следующий член равен сумме двух предыдущих:

let num = 7;

let x = 1;
let y = 1;


 for (let i = 1; i < num ; i++) {
   console.log(x);
    y = y + x;
    x = y - x;
  } // 1, 1, 2, 3, 5, 8, 13

  const n = 10;
  
  let a = 1;
  let b = 1;
  
  
  console.log(a);
  console.log(b);
  
  for (let i = 0; i < (n / 2) - 1; i++ ) {
	a += b;
   	b += a;
    
    console.log(a);
 	console.log(b);
  }