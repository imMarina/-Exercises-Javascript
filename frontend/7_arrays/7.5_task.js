// Задание 7.5
// Дан массив `a`. Найдите количество положительных элементов массива.

let d = [-2, 10, -5, -1, 2, 6];
let positive = [];

for (let i = 0; i < d.length; i++) {
    if (d[i] >= 0) {
        positive.push(d[i]);
    } else {
      continue;
    }
}
  console.log(positive.length); // sum = 6