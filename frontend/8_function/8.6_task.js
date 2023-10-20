// Задача 8.6
// Написать функцию, принимающую массив чисел. Она должна возвращать элемент с минимальным значением.

function min(array) {
    let max = array[0];
    let min = array[0];
    
    for (let i = 0; i < array.length; i++) {
        if (min < array[i]) {
            max = array[i];
        }
        if (min > array[i]) {
            min = array[i];
        }
    }
    return min;
}

console.log(min([1, 42, 34, 12])); // 1
console.log(min([-5, -10, -100])); // -100