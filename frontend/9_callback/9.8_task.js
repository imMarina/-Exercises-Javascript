// Задача 9.8

// Используйте функцию `find` из предыдущей задачи. Функция `find` будет принимать числовой массив. Напишите callback-функцию, которая будет проверять элемент на условие - его остаток от деления на `5` должен равняться `3`. Если элемент удовлетворяет условию, возвращает `true`, иначе `false`. Callback-функцию можно создавать стрелочным способом.

function find(array, callback) {
    
    for (let i = 0; i < array.length; i++) {
        let elem = array[i];
        const result = callback(elem, i);

        if (result) {
           return elem;
        }
    }
}

//  Callback-функция стрелочным способом
function myCallbackFunc(elem, index) {
    if (elem % 5 === 3) {
      return true;
    }
}

const arr1 = [3, 8, 13, 18];
const elem1 = find(arr1, myCallbackFunc);
console.log(elem1); // 3

const arr2 = [4, 7, 9, 10];
const elem2 = find(arr2, myCallbackFunc);
console.log(elem2); // undefined


//  Callback-функция стрелочным способом
const elem1 = find(arr1, (elem, index) => (elem % 5 === 3) ? true : false);

const elem2 = find(arr2, (elem, index) => (elem % 5 === 3) ? true : false);


// by method find array
const elem1 = arr1.find(elem => elem % 5 === 3);
const elem2 = arr2.find(elem => elem % 5 === 3);
console.log(elem1);
console.log(elem2);
