// Задание 7.5
// Дан массив `a`. Найдите количество положительных элементов массива.

let arr = [-2, 10, -5, -1, 2, 6];
let positive = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
        positive.push(arr[i]);
    } else {
      continue;
    }
}
  console.log(positive.length); // 3