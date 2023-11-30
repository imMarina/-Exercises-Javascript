// Задача every.1
// Дан массив. Проверить, являются ли все элементы числами.

const arr1 = [1, 45, 43, 4, 6, 8];
//output
true

const arr2 = [1, 45, "43", 4, 6, 8];
//output
false

console.log(arr1.every(elem => parseInt(elem) === elem)); // true
console.log(arr2.every(elem => parseInt(elem) === elem)); // false