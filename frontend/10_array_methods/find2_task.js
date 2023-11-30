// Задача find.2
// Дан массив. Найти первый элемент, равный строке “find”.

const arr = [1, "found", 89, "apple", "fly", 90, "find", 78];

const result = arr.find(elem => elem === 'find');
console.log(result); // "find"