// Задача map.3
// Дан массив массивов. Создать новый массив, элементами которого будет длины подмассивов исходного массива.

const arr = [[1, 2, 3], ["apple", "orange"], [34, 5346, 321, 1], ["cat", "dog", "piggy"]];

const newArr = arr.map((elem) => elem.length);
console.log(newArr);

//output
// [3, 2, 4, 3]