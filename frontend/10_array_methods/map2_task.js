// Задача map.2
// Дан числовой массив. Создать новый массив элементы которого, будут являться результатом умножения значения элемента на его индекс.

const arr = [1, 6, 12, 45, 23, 56];

const newArr = arr.map((elem, index) => elem * index);
console.log(newArr);

//output
// [0, 6, 24, 135, 92, 280]