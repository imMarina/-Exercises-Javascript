// method INCLUDES

// Метод includes() проверяет, содержит ли массив указанный элемент или нет.
// Этот метод определён у массивов и строк.
// Для массивов: проверяет, есть ли искомый элемент в массиве.
// Для строк: проверяет, есть ли искомая подстрока в строке.
// Возвращает true, если искомый элемент нашёлся и false — если нет


// Syntax includes() 
array.includes(valueToFind, fromIndex);

// Параметры includes():
// searchValue — значение для поиска.
// fromIndex (необязательно) — позиция в массиве, с которой начинается поиск. По умолчанию это 0.
// Примечание: Для отрицательных значений поиск начинается с array.length + fromIndex (отсчет идет от обратного). Например, -1 представляет собой последний элемент.

// Return value 
// true, если searchValue найдено в каком-то месте массива;
// false, если searchValue не найдено в массиве.


// example 1
let languages = ["JavaScript", "Java", "C"];
// проверяем содержит ли массив 'Java'
let check = languages.includes("Java");
console.log(check); // true


// example 2
let languages = ["JavaScript", "Java", "C", "C++"];
// проверяем содержит ли массив 'C'
let check1 = languages.includes("C"); // true
// проверяем содержит ли массив 'Ruby'
let check2 = languages.includes("Ruby"); // false



// example 2: includes() для поиска с учётом регистра
// Метод includes() чувствителен к регистру. Например:

let languages = ["JavaScript", "Java", "C", "Python"];
// проверяем содержит ли массив 'Python'
let check1 = languages.includes("Python"); // true
// проверяем содержит ли массив 'python'
let check2 = languages.includes("python"); // false


// example 3: includes() с двумя параметрами
let languages = ["JavaScript", "Java", "C", "Python"];

// второй аргумент указывает позицию для начала поиска
let check1 = languages.includes("Java", 2); // false

// поиск начинается с третьего последнего элемента
let check2 = languages.includes("Java", -3); // true


// example 4 Массив:

const dead = ['Джон Сноу', 'Джофри', 'Нед Старк', 'Король ночи']
const isAryaDead = dead.includes('Арья Старк')
console.log(isAryaDead) // false

const isJoffreyDead = dead.includes('Джофри')
console.log(isJoffreyDead) // true

const isJohnDead = dead.includes('Джон Сноу', 1)
console.log(isJohnDead) // false


// example 5 Строка:

const text = 'Посмотри, ведь это рядом наша панда. Мы бежим с тобой как-будто от гепарда.';

console.log(text.includes('панда')) // true

console.log(text.includes('Обезьяна')) // false

// поиск идет с учетом регистра
console.log(text.includes('Панда')) // false