// Задание 7.2
// Дан массив `a`. Выведете минимальный и максимальный элементы массива.

console.log(Math.min(...a));
console.log(Math.max(...a));

let min = a[0];
let max = min;
  for (i = 1; i < a.length; i++) {
      if (a[i] > max) max = a[i];
      if (a[i] < min) min = a[i];
  }
  
console.log(min); // min = -1
console.log(max); // max = 9