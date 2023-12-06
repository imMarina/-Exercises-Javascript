// method FINDLASTINDEX

// ES2023 добавлены новые возможности работы с массивами в JavaScript (findLast и findLastIndex).

// Метод findLastIndex помогает найти индекс первого элемента с конца массива, соответствующий условию согласно переданному в параметре коллбэку. 
//Если элемента нет, то возвращается undefined.

// Syntax findLast() by mozilla docs
findLastIndex(callbackFn)
findLastIndex(callbackFn, thisArg)

// callbackFn Функция, выполняемая для каждого элемента массива. Он должен возвращать truthy value, указывающее на то, что соответствующий элемент был найден, и falsy value в противном случае. Функция вызывается со следующими аргументами:

// element Текущий элемент, обрабатываемый в массиве.
// index Индекс текущего элемента, обрабатываемого в массиве.
// array Массив был вызван.findLastIndex()
// thisArg (необязательно) - значение, используемое в качестве this, при вызове функции callback.

// Return value
// The index of the last (highest-index) элемента в массиве, который проходит проверку. 
// В противном случае, если соответствующий элемент не найден. -1


// example 1
let arr = ['a', 'b', 'c', 'd'];
let res = arr.findIndex(elem => elem === 'f');
console.log(res); // -1


// example 2
// Find the index of the last prime number in an array
function isPrime(element) {
    if (element % 2 === 0 || element < 2) {
        return false;
    }
    for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
        if (element % factor === 0) {
            return false;
        }
    }
    return true;
}

console.log([4, 6, 8, 12].findLastIndex(isPrime)); // -1, not found
console.log([4, 5, 7, 8, 9, 11, 12].findLastIndex(isPrime)); // 5


// example 3
// Using findLastIndex() on sparse arrays
// You can search for in a sparse array and get the index of an empty slot.undefined
console.log([1, , 3].findLastIndex((x) => x === undefined)); // 1