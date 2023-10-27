
// Задача 9.4

// Используйте функцию `map` из предыдущей задачи. 
// Функция `map` будет принимать числовой массив, который состоит только из 1 и 0 в случайном порядке. 
// Напишите callback-функцию, которая будет инвертировать элемент предыдущего массива и возвращать это инвертированное значение. 
// Callback-функцию можно создавать стрелочным способом.


function map(array, callback) {
    let newArr = [];
    
    for (let i = 0; i < array.length; i++) {
        let elem = array[i];
        const newElem = callback(elem, i);
        newArr.push(newElem);
        }
    return newArr;
}

function myCallbackFunc(elem) {
    let num = 1;
    
    if (elem === 1) {
        num = 0;
    }
    
    return num;
}

const arr = [1, 1, 0, 0, 1, 0, 1];
const newArr = map(arr, myCallbackFunc);
console.log(newArr); // [0, 0, 1, 1, 0, 1, 0];

// вариант с анонимной callback-функцией
const newArr = map(arr, function(elem) {
    let num = 1;
    if (elem === 1) {
        num = 0;
    }
    return num;
});


//  Callback-функция стрелочным способом
const newArr = map(arr, elem => elem === 1 ? 0 : 1);
console.log(newArr); // [0, 0, 1, 1, 0, 1, 0];

