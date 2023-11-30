// Задача find.3
// Дан массив строк. Найти первый элемент, в котором записано число. Для решения задачи потребуются такие функции, как isNaN() и parseInt().

const arr = ["apple", "fly", "banana", "5", "cat", "12", "dog"];

const result = arr.find(elem => isNaN(parseInt(elem)) === false);
console.log(result); // 5