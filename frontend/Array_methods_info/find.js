// method FIND

// Метод find() возвращает значение первого элемента массива, который удовлетворяет условиям заданной функции.
// В противном случае возвращается undefined.


// Syntax find() 

arr.find(callback(element, index, arr), thisArg); // Где arr - это массив.

// Параметры find():

// callback функцию, которая будет вызываться для каждого элемента массива. Принимает:
// element текущий элемент в массиве.

// thisArg (необязательно) - значение, используемое в качестве this, при вызове функции callback.


// Example 1

let numbers = [1, 3, 4, 9, 8];
// функция проверки четного числа
function isEven(element) {
    return element % 2 == 0;
}
// получаем первое четное число
let evenNumber = numbers.find(isEven);
console.log(evenNumber); // 4

// используем стрелочную функцию
let firstOdd = randomArray.find((element) => element % 2 == 1);
console.log(firstOdd); // 1


// example 2 - find() с элементами объекта
const team = [
    { name: "Bill", age: 10 },
    { name: "Linus", age: 15 },
    { name: "Alan", age: 20 },
    { name: "Steve", age: 34 },
];

function isAdult(member) {
    return member.age >= 18;
}
console.log(team.find(isAdult)); // { name: 'Alan', age: 20 }

// используем стрелочную функцию и деструктуризацию
let adultMember = team.find(({ age }) => age >= 18);

