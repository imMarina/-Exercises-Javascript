// Задание 7.6
// Дан массив `a`. Сформируйте новый массив `b`, который будет состоять только из положительных чисел массива `a` и выведете его на экран. Не пользуйтесь методом `filter`.

let arr = [-2, 10, -5, -1, 2, 6];
let positiveArr = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      positiveArr.push(arr[i]);
    } else {
      continue;
    }
}
  console.log(positiveArr); // [object Array] (3) [10,2,6]