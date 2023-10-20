// Задача 8.7
// Написать функцию, принимающую массив чисел. Она должна возвращать сумму всех элементов.

function sum(array) {
    let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
    return sum;
}

// method reduce
function sum(array) {
    let sum = array.reduce((index, item) => index += item)
    return sum;
}

console.log(sum([1, 2, 3, 4])); // 10
console.log(sum([-5, -10, 15])); // 0