// Задача map.1
// Дан числовой массив. Создать новый массив элементы которого, будут являться строками, созданными из элементов исходного массива.

const arr = [1, 6, 12, 45, 23, 56];

const newArr = arr.map((elem) => String(elem));
// const newArr = arr.map((elem) => elem.toString());
console.log(newArr);

//output
// ["1", "6", "12", "45", "23", "56"]