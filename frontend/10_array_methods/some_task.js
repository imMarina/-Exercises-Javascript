// Задача some.1
// Дан массив. Проверить, есть ли в нём хотя бы один строковый элемента.

const arr1 = [1, 45, 43, 4, 6, 8];
//output
false

const arr2 = [1, 45, "43", 4, 6, 8];
//output
true

console.log(arr1.some(elem => typeof elem === 'string')); // false
console.log(arr2.some(elem => typeof elem === 'string')); // true