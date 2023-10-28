// Задача 9.7 (аналог метода find)

// Примечание: Метод **`find()`** возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции. В противном случае возвращается `undefined`.

// Напишите функцию `find`, которая принимает первым параметром массив, вторым - callback-функцию. Функция `find` должна находить элемент по условию и возвращать его, иначе элемент не найден и возвращает `undefined`. сallback-функцию должна проверять каждый элемент исходного массива на соответствие заданному условию внутри самой сallback-функции. Она должна принимать два параметра: сам элемент и индекс, а также возвращать булевое значение  (`const result = callback(array[index], index)`, где `result` может быть либо `true`, либо `false`). Если `result` равен `true`, то необходимо прекратить поиск и вернуть найденный элемент, если `false`, то продолжаем поиск. Если после завершения поиска, элемент не был найдет, то функция `find` возвращает `undefined`.
// Передайте в созданную функцию `find` массив строк, а в качестве callback-функции - функцию, которая будет проверять элемент на равенство строке `“apple”.` Если элемент равен строке `“apple”`, то возвращает `true`. в противном случае возвращает `false`. Callback-функцию можно создавать стрелочным способом.

function find(array, callback) {
    
    for (let i = 0; i < array.length; i++) {
        let elem = array[i];
        const result = callback(elem, i);
            
        if (!result) {
            continue;
        } else {
            return elem;
        }

        // if (result) {
        //    return elem;
        // }
    }
}

function myCallbackFunc(elem, index) {
    if (elem === "apple") {
        return true;
    } 
}

const arr1 = ["apricot", "banana", "kiwi", "lime", "apple", "mango"];
const elem1 = find(arr1, myCallbackFunc);
console.log(elem1); // "apple"

const arr2 = ["apricot", "banana", "kiwi", "lime", "42", "mango"];
const elem2 = find(arr2, myCallbackFunc);
console.log(elem2); // undefined

//  Callback-функция стрелочным способом
const elem1 = find(arr1, (elem, index) => (elem === "apple") ? true : false);
const elem2 = find(arr2, (elem, index) => (elem === "apple") ? true : false);
