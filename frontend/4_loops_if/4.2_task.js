// Задание 4.2
// Дано n. Из первых n натуральных чисел выведете только чётные.

let num = 10;

for (let i = 1; i < num; i++) {
  if (i % 2 == 1) continue
  console.log(i);
}