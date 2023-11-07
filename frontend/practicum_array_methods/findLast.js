// method FINDLAST

// ES2023 добавлены новые возможности работы с массивами в JavaScript (findLast и findLastIndex).
// Примечание: методы find и findLast похожи, find перебирает массив сначала, а findLast - с конца, поэтому когда в массиве несколько одинаковых элементов, find и findLast вернут разные значения.

// FindLast обходит массив с конца, возвращая первый элемент, который удовлетворяет переданной в метод коллбэк функции 
// Если элемента нет, то в результат возвращается undefined.


// Syntax findLast()
findLast(callbackFn)
findLast(callbackFn, thisArg)

// callbackFn Функция, выполняемая для каждого элемента массива. Он должен возвращать truthy value, указывающее на то, что соответствующий элемент был найден, и falsy value в противном случае. Функция вызывается со следующими аргументами:

// element Текущий элемент, обрабатываемый в массиве.
// index Индекс текущего элемента, обрабатываемого в массиве.
// array Массив был вызван.findLast()
// thisArg (необязательно) - значение, используемое в качестве this, при вызове функции callback.

// Return value
// The last (highest-index) элемент в массиве, удовлетворяющий предоставленной функции тестирования; 
// undefined, если соответствующий элемент не найден.


// example 1
// Давайте найдем элемент массива, соответствующий условиям, прописанным в функции:

let arr = [1, 2, 3, 4, 5];
let res = arr.findLast(function(elem) {
	return elem > 0;
});
console.log(res); // 5


// example 2 - on objects
const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "fish", quantity: 1 },
    { name: "cherries", quantity: 5 },
];

const result = inventory.findLast(({ quantity }) => quantity < 2);
console.log(result);// { name: "fish", quantity: 1 }


// example 3 - on arrays
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

console.log([4, 6, 8, 12].findLast(isPrime)); // undefined, not found
console.log([4, 5, 7, 8, 9, 11, 12].findLast(isPrime)); // 11


// example 4 on sparse arrays
// Declare array with no elements at indexes 2, 3, and 4
const array = [0, 1, , , , 5, 6];

// Shows all indexes, not just those with assigned values
array.findLast((value, index) => {
    console.log(`Visited index ${index} with value ${value}`);
});
// Visited index 6 with value 6
// Visited index 5 with value 5
// Visited index 4 with value undefined
// Visited index 3 with value undefined
// Visited index 2 with value undefined
// Visited index 1 with value 1
// Visited index 0 with value 0
