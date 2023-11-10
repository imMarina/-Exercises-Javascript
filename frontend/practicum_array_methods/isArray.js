// method isArray
// Метод isArray() проверяет, является ли переданный аргумент массивом или нет.
// возвращает true, если объект является массивом
// и false, если он массивом не является.


// Syntax
Array.isArray(value);
// Метод isArray(), будучи статическим методом, вызывается с использованием имени класса Array.

// Параметры isArray():
// value значение, которое необходимо проверить.

// Return value
// true, если переданное значение является Array
// false, если переданное значение не является Array
// Примечание: Этот метод всегда возвращает false для экземпляров TypedArray.


// example 1
let numbers = [1, 2, 3, 4];
// проверяем является ли numbers массивом или нет
console.log(Array.isArray(numbers)); // true

let text = "JavaScript";
// проверяем является ли text массивом или нет
console.log(Array.isArray(text)); // false


// example 2
let fruits = ["Apple", "Grapes", "Banana"];
// проверка того, является ли fruits массивом или нет
console.log(Array.isArray(fruits)); // true

let text = "Apple";
// проверка того, является ли text массивом или нет
console.log(Array.isArray(text)); // false


// example 3 - isArray() для проверки других типов данных
// передаём пустой массив []
console.log(Array.isArray([])); // true

// мы создали массив с элементом 7 и передали это значение в isArray()
console.log(Array.isArray(new Array(7))); // true

// передача булевого значения
console.log(Array.isArray(true)); // false

// передача undefined
console.log(Array.isArray(undefined)); // false

// не передаём ни одного аргумента в isArray()
console.log(Array.isArray()); // false


// example 4 (mozila docs)

// Все следующие вызовы вернут TRUE
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
// Малоизвестный факт: Array.prototype сам является массивом:
Array.isArray(Array.prototype);

// Все следующие вызовы вернут FALSE
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
Array.isArray({ __proto__: Array.prototype });
