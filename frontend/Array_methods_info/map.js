// method MAP

// Метод map() принимает функцию в качестве параметра и создает новый массив с результатом вызова указанной функции для каждого элемента массива. 
// Метод map() всегда будет возвращать одинаковое количество элементов.


// Syntax
array.map(callback(currentValue), thisArg);

// Параметры map():
// callback функцию, которая будет вызываться для каждого элемента массива, добавляя возвращаемые значения в новый массив. Принимает:
// currentValue текущий обрабатываемый элемент в массиве.
// thisArg (необязательно) - значение, используемое в качестве this, при вызове функции callback. По умолчанию определен как undefined.

// return value map()
// Возвращает новый массив с элементами в качестве значений, возвращенных функцией callback для каждого элемента соответственно.

// Примечания:
// map() не изменяет исходный массив.
// map() вызывает функцию callback один раз для каждого элемента массива по порядку.
// map() не вызывает функцию callback для элементов массива без значений.


// syntax by mozilla docs
const new_array = arr.map(function callback( currentValue[, index[, array]]) {
    // Возвращает элемент для new_array
}[, thisArg])

// callback Функция, вызываемая для каждого элемента массива arr. Каждый раз, когда callback выполняется, возвращаемое значение добавляется в new_array.

// Функция callback, создающая элемент в новом массиве, принимает три аргумента:
// currentValue Текущий обрабатываемый элемент массива.
// indexНеобязательный Индекс текущего обрабатываемого элемента в массиве.
// arrayНеобязательный Массив, по которому осуществляется проход.
// thisArgНеобязательный Необязательный параметр. Значение, используемое в качестве this при вызове функции callback

// return value
// Новый массив, где каждый элемент является результатом callback функции.


// example 1: пользовательская стрелочная функция
const string = "JavaScript";
const stringArr = string.split(""); 

let asciiArr = stringArr.map((x) => x.charCodeAt(0)); // The charCodeAt() method of String values returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

// метод map() не изменяет исходный массив
console.log(stringArr); // ['J', 'a', 'v', 'a','S', 'c', 'r', 'i', 'p', 't']
console.log(asciiArr); // [ 74,  97, 118,  97, 83,  99, 114, 105, 112, 116 ]


// example 2: Применяем метод map() с использованием пользовательской функции
const prices = [1800, 2000, 3000, 5000, 500, 8000];

let newPrices = prices.map(Math.sqrt); // The Math.sqrt () method returns the square root of a number
console.log(newPrices); // [ 42.42640687119285, 44.721359549995796, 54.772255750516614, 70.71067811865476, 22.360679774997898, 89.44271909999159 ]


// example 3: Применяем метод map() в массивах с объектами
const employees = [
    { name: "Adam", salary: 5000, bonus: 500, tax: 1000 },
    { name: "Noah", salary: 8000, bonus: 1500, tax: 2500 },
    { name: "Fabiano", salary: 1500, bonus: 500, tax: 200 },
    { name: "Alireza", salary: 4500, bonus: 1000, tax: 900 },
];

// рассчёт чистой суммы (после вычета налогов), которая будет выдана сотрудникам
const calcAmt = (obj) => {
    newObj = {};
    newObj.name = obj.name;
    newObj.netEarning = obj.salary + obj.bonus - obj.tax;
    return newObj;
};

let newArr = employees.map(calcAmt);
console.log(newArr); // Вывод в консоль:
// [
//     { name: "Adam", netEarning: 4500 },
//     { name: "Noah", netEarning: 7000 },
//     { name: "Fabiano", netEarning: 1800 },
//     { name: "Alireza", netEarning: 4600 },
// ];

// Примечание: метод map() присваивает значение undefined новому массиву, если callback функция возвращает undefined или пустое значение.


// example 4: можно сделать массив с объектами:
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const objects = nums.map(function (num) {
    return {
        field: num,
    }
});

console.log(objects)
// [
//   { field: 1 },
//   { field: 2 },
//   ...
//   { field: 9 }
// ]


// example 5 Пример: использование map для переворачивания строки

const string = "12345";
const reversed = Array.prototype.map
    .call(string, (x) => x)
    .reverse()
    .join("");
// reversed равен '54321'
// Бонус: используйте '===' для проверки того, является ли строка палиндромом

