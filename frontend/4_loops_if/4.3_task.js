// Задание 4.3
// Дано n. Из первых n натуральных чисел выведете только те что делятся на 7.

let num2 = 100;

for (let i = 0; i < num2; i++) {
  if (i % 7 !== 0) continue
  console.log(i);
}