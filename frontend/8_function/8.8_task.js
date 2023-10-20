// Задача 8.8
// Написать функцию, принимающую массив чисел. Она должна возвращать новый массив с квадратами элементов переданного массива.

const arr = [1, 2, 3, 4];

const arrWithSquare = arr.map((item) => item ** 2); // first option - method map


function map(array) {
    let result = [];
    for (let item of array) {
        result.push(item ** 2);
    }
    return result;
    
    
}
console.log(arrWithSquare); // [1, 4, 9, 16]