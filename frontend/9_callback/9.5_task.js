// Задача 9.5 (аналог метода filter)

// Примечание: Метод **`filter()`** создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции. 


// - Напишите функцию `filter`,  которая принимает первым параметром массив, вторым - callback-функцию. Функция `filter` должна создавать новый отфильтрованный массив и возвращать его или возвращать пустой массив `[]`. сallback-функцию должна проверять каждый элемент исходного массива на соответствие заданному условию внутри самой сallback-функции. Она должна принимать два параметра: сам элемент и индекс, а также возвращать булевое значение  (`const result = callback(array[index], index)`, где `result` может быть либо `true`, либо `false`). Если `result` равен `true`, то проверяемый элемент попадает новый массив, если `false`, то не попадает в новый массив.
// - Передайте в созданную функцию `filter` числовой массив, а в качестве callback-функции - функцию, которая будет проверять элемент на чётность. Если элемент чётный, возвращает `true`, иначе `false`. Callback-функцию можно создавать стрелочным способом.


function filter(array, callback) {
    let newArr = [];
    
    for (let i = 0; i < array.length; i++) {
        let elem = array[i];
        const result = callback(elem, i);
        
            if (result === true) {
                newArr[newArr.length] = elem;
                // newArr[i] = elem; // [ 2, <1 empty item>, 42, <3 empty items>, 8 ]
                // newArr.push(elem);
            }
        }
    return newArr;
   }
   
   function myCallbackFunc(elem, index) {
       if (elem % 2 === 0) {
           return true;
       }
   }
   
const arr1 = [2, 3, 42, 15, 99, 5, 8];
const newArr1 = filter(arr1, myCallbackFunc);
console.log(newArr1); // [2, 42, 8];

const arr2 = [1, 3, 5];
const newArr2 = filter(arr2, myCallbackFunc);
console.log(newArr2); // [];


//  Callback-функция стрелочным способом

const newArr1 = filter(arr1, (elem, index) => (elem % 2 === 0) ? true : false);
console.log(newArr1); // [2, 42, 8];

const newArr2 = filter(arr2, (elem, index) => (elem % 2 === 0) ? true : false);
console.log(newArr2); // [];


// by method filter array
const newArr1 = arr1.filter(elem => elem % 2 === 0);
console.log(newArr1); // [2, 42, 8];

const newArr2 = arr2.filter(elem => elem % 2 === 0);
console.log(newArr2); // [];