// Задача filter.1
// Дан массив чисел. Необходимо создать новый массив, в котором будут содержаться только положительные значения исходного массива.


const arr = [1, 4, -32, 5, -64, 743];

const newArr = arr.filter(num => num >= 0);
console.log(newArr); 

//output
[1, 4, 5, 743]