// Задача 8.12

// Написать функцию, принимающую массив чисел. Она должна возвращать новый массив, который будет зеркальным отражение переданного массива.

const arr = [1, 2, 3, 4, 5, 6];

const reversedArr = toReversed(arr);

function toReversed(arr) {

    let reverseArr = [];
    let index = 0;
    
    for (let i = arr.length - 1; i >= 0; i--) {
        reverseArr[index] = arr[i];
        index++;
    }
    return reverseArr;
}


console.log(reversedArr); // [6, 5, 4, 3, 2, 1]