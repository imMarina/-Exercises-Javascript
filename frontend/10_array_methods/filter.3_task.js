// Задача filter.3

// Дан массив. Необходимо создать новый массив, в котором будут содержаться только элементы с типом string.

const arr = [1, 4, -32, "-5", 64, "orange", 743, "number"];

const newArr = arr.filter(elem => typeof elem === 'string');
console.log(newArr); 

//output
["-5", "orange", "number"]//