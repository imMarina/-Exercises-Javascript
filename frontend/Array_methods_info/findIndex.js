// method FINDINDEX 
// Array.prototype.findIndex()

// Метод findIndex позволяет найти индекс первого элемента согласно переданному в параметре коллбэку. 
// Если элемент не найден, то возвращается -1.

// Syntax findIndex() 
arr.findIndex(callback(element, index, array), thisArg);

// Параметры findIndex():

// callback функцию, которая будет вызываться для каждого элемента массива. Принимает:
// element текущий обрабатываемый элемент в массиве.
// thisArg (необязательно) - значение, используемое в качестве this, при вызове функции callback.

// findIndex() Возвращает индекс первого элемента в массиве, который удовлетворяет заданной функции.
// Возвращает -1, если ни один из элементов не удовлетворяет функции.


// example 1
function isWantedGuest(element, index, array) {
    const guestName = 'Лиза'

    return element === guestName
}

const partyGuests = ['Даня', 'Саша', 'Юля', 'Лиза', 'Егор'];

const meetingGuests = ['Даня', 'Егор', 'Арсений'];

console.log(partyGuests.findIndex(isWantedGuest))
  // 3 (так как partyGuests[3] -> 'Лиза')

console.log(meetingGuests.findIndex(isWantedGuest))
  // -1 (совпадений нет)


// example 2
// функция возврата нечётного числа
function isOdd(element) {
    return element % 2 !== 0;
}

// объявляем массив целых чисел
let numbers = [2, 8, 1, 3, 4];

// возвращяем индекс первого нечётного числа в массиве
let firstOdd = numbers.findIndex(isOdd);
console.log(firstOdd); // 2


// example 2: findIndex() со стрелочной функцией
// объявляем массив
let days = ["Sunday", "Wednesday", "Tuesday", "Friday"];

// возвращаем первый индекс у 'Wednesday' в массиве
let index = days.findIndex((day) => day === "Wednesday");
console.log(index); // 1


// example 3: findIndex() с элементами объекта
// объявляем объект
const team = [
    { name: "Bill", age: 10 },
    { name: "Linus", age: 15 },
    { name: "Alan", age: 20 },
    { name: "Steve", age: 34 },
];

// функция, возвращающая возраст больший или равный 18
function isAdult(member) {
    return member.age >= 18;
}

// возвращает индекс первого элемента, который
// больше или равен 18
console.log(team.findIndex(isAdult)); // 2