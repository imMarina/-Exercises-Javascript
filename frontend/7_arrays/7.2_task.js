// Задание 7.2
// Дан массив `a`. Выведете минимальный и максимальный элементы массива.
let arr = [5, 2, -1, 9];

let min = arr[0];
let max = min;

/* with infinity 
let max = -Infinity;
let min = Infinity;
*/

  for (let i = 1; i < arr.length; i++) {

      if (arr[i] > max) {
        max = arr[i];
      } else if (arr[i] < min) {
        min = arr[i];
      }

      // if (arr[i] > max) max = arr[i];
      // if (arr[i] < min) min = arr[i];
  }
      

  
console.log(min); // min = -1
console.log(max); // max = 9


// with method Math.min / Math.max
console.log(Math.min(...arr));
console.log(Math.max(...arr));