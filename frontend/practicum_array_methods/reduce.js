// method REDUCE
// Метод reduce() вызывает callback функцию для каждого элемента массива и возвращает одно значение.

// syntax
array.reduce(callback(accumulator, currentValue), initialValue);

// Параметры reduce():
// callback функцию, которая будет вызываться для каждого элемента массива (кроме первого элемента, если не указано значение initialValue). Принимает:
// accumulator аккумулятор, накапливающий возвращаемые значения функции callback.
// currentValue текущий обрабатываемый элемент в массиве.
// InitialValue (необязательно) — значение, которое будет передано в callback() при первом вызове. Если он не указан, первый элемент действует как accumulator при первом вызове, и callback() выполняться для него не будет.

// Примечание: Вызов метода reduce() для пустого массива без начального значения вернёт TypeError.

// return value reduce()
// Возвращает одно значение, полученное после обработки массива.

// Примечания:
// reduce() вызывает заданную функцию для каждого элемента массива слева направо.
// reduce() не изменяет исходный массив.
// Почти всегда безопаснее указать initialValue.


// example 1
const message = ["JavaScript ", "is ", "fun."];

// функция для объединения всех строковых элементов
function joinStrings(accumulator, currentValue) {
    return accumulator + currentValue;
}

// метод reduce объединяет каждый элемент строки
let joinedString = message.reduce(joinStrings);
console.log(joinedString); // вывод в консоль: JavaScript is fun.


// example 2 Сумма всех элементов массива
const numbers = [1, 2, 3, 4, 5, 6];

function sum_reducer(accumulator, currentValue) {
    return accumulator + currentValue;
}

let sum = numbers.reduce(sum_reducer);
console.log(sum); // 21

// используем стрелочную функцию
let summation = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);
console.log(summation); // 21


// example 3: Вычитание чисел в массиве
const numbers = [1800, 50, 300, 20, 100];

// вычитает все числа из первого числа
// так как первый элемент яляется аккумулятором
// 1800 - 50 - 300 - 20 - 100
let difference = numbers.reduce(
    (accumulator, currentValue) => accumulator - currentValue
);
console.log(difference); // 1330

const expenses = [1800, 2000, 3000, 5000, 500];
const salary = 15000;

// функция, которая вычитает все элементы массива из заданного числа
// 15000 - 1800 - 2000 - 3000 - 5000 - 500
let remaining = expenses.reduce(
    (accumulator, currentValue) => accumulator - currentValue,
    salary
);
console.log(remaining); // 2700

// Этот пример ясно передаёт разницу между указанием initialValue и его отсутствием.


// example 3: Удаление повторяющихся элементов из массива
let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];
let uniqueAgeGroup = ageGroup.reduce(function (accumulator, currentValue) {
    if (accumulator.indexOf(currentValue) === -1) {
        accumulator.push(currentValue);
    }
    return accumulator;
}, []);

console.log(uniqueAgeGroup); // [ 18, 21, 1, 51, 5, 7, 10 ]


// example 4: Группировка объектов по свойству
let people = [
    { name: "John", age: 21 },
    { name: "Oliver", age: 55 },
    { name: "Michael", age: 55 },
    { name: "Dwight", age: 19 },
    { name: "Oscar", age: 21 },
    { name: "Kevin", age: 55 },
];

function groupBy(objectArray, property) {
    return objectArray.reduce(function (accumulator, currentObject) {
    let key = currentObject[property];
    if (!accumulator[key]) {
        accumulator[key] = [];
    }
    accumulator[key].push(currentObject);
    return accumulator;
    }, {});
}

let groupedPeople = groupBy(people, "age");
console.log(groupedPeople);

//Вывод в консоль:
// {
//     '19': [ { name: 'Dwight', age: 19 } ],
//     '21': [ { name: 'John', age: 21 }, { name: 'Oscar', age: 21 } ],
//     '55': [
//         { name: 'Oliver', age: 55 },
//         { name: 'Michael', age: 55 },
//         { name: 'Kevin', age: 55 }
//     ]
// }