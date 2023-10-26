// Задание 7.3
// Дан массив `a`. Выведете сумму элементов массива.

let arr = [1, 3, 2];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum); // sum = 6