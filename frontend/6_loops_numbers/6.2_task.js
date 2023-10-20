// Задача 6.2
// Выведите первые члены последовательности Фибоначчи, которые не превышают числа x:

// x = 22
// 1, 1, 2, 3, 5, 8, 13, 21


let x = 22;
let prev1 = 1;
console.log(prev1);

let prev2 = 1;
while (prev2 < x) {
  console.log(prev2);
  prev2 += prev1;
  prev1 = prev2 - prev1;
}