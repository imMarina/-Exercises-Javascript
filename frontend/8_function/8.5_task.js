  // Задача 8.5
  // Написать функцию, принимающую массив чисел. Она должна развращать элемент с максимальным значением.

// first exm
function max(array) {
    // с помощью оператора spread
    return Math.max(...array);
}

// second exm
function max(array) {
    let max = array[0];
    let min = array[0];
    
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
        if (max > array[i]) {
            min = array[i];
        }
    }
    return max;
}

console.log(max([1, 42, 34, 12])); // 42
console.log(max([-5, -10, -100])); // -5