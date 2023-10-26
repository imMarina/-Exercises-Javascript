// Задача 8.9
// Написать функцию, принимающую массив отрицательных и положительных чисел. 
// Она должна возвращать новый массив только с отрицательными числами.

const arr = [43, -23, -12, 5, -1, 42];

const arrWithNegative = filter(arr);

function filter(array) {
    let negativeArr = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negativeArr.push(array[i]);
            // negativeArr[negativeArr.length] = array[i];
        }
    }
    return negativeArr;
}


console.log(arrWithNegative); // [-23, -12, -1]