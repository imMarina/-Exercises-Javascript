// Задача 9.6

// Используйте функцию `filter` из предыдущей задачи. Функция `filter` будет принимать массив с числами и строками. Напишите callback-функцию, которая будет проверять тип элемента. Если тип элемента `string`, возвращает `true`, иначе `false`. Callback-функцию можно создавать стрелочным способом.

function filter(array, callback) {
    let newArr = [];
    
    for (let i = 0; i < array.length; i++) {
        let elem = array[i];
        const result = callback(elem, i);
        
            if (result === true) {
                newArr[newArr.length] = elem;
                // newArr[i] = elem; 
                // newArr.push(elem);
            }
        }
    return newArr;
}

//  Callback-функция 
function myCallbackFunc(elem, index) {
    if (typeof elem === 'string') {
        return true;
    } 
}

const arr1 = [4, "i", 67, "phone", -434, "42"];
const newArr1 = filter(arr1, myCallbackFunc);
console.log(newArr1); // ["i", "phone", "42"];

const arr2 = [4, 67, -434, 0];
const newArr2 = filter(arr2, myCallbackFunc);
console.log(newArr2); // [];


//  Callback-функция стрелочным способом
const newArr1 = filter(arr1, (elem, index) => (typeof elem === 'string') ? true : false);

const newArr2 = filter(arr2, (elem, index) => (typeof elem === 'string') ? true : false);