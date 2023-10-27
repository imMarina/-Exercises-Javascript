// Задание 7.8
// Дан массив `a`. Поменяйте местами его минимальный и максимальный элементы и выведете на экран.

let arr = [7, 2, 3, 0]; // [0,2,3,7]

for (let i = 0; i <= arr.length; i++) {

    for (let j = 0; j <= arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let max = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = max;
    }
  }
}

console.log(arr); // [ 0, 2, 3, 7 ]