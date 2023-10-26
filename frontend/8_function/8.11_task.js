// Задача 8.11

// Написать функцию, принимающую массив чисел. Она должна возвращать `true`, если в массиве все числа двузначные, иначе `false`.


const arr = [18, 95, 36, 37, 42];
const arr2 = [9, 6, 76, 3, 32];

function every(array) {

    for (let i = 0; i < array.length; i++) {
        
        if (array[i] > 10 && array[i] < 99) {
            return true;
        } else {
            return false; 
        }
    }
}

console.log(every(arr)); // true
console.log(every(arr2)); // false