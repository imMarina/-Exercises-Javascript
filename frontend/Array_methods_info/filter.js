// method FILTER
// Array.prototype.filter()

// Метод Array.prototype.filter() создаёт новый массив, в который попадают только те элементы исходного массива, которые соответствуют заданному условию.


// Syntax filter()

arr.filter(callback(element), thisArg); // Где arr - это массив.

// Метод filter() принимает:
// callback функцию с проверкой, для вызова на каждом элементе массива; возвращает true, если элемент прошёл проверку, иначе возвращает false. 
// Принимает:
// element     текущий обрабатываемый элемент в массиве.
// thisArg (необязательно) - значение, используемое в качестве this, при вызове функции callback. По умолчанию определен как undefined.

// filter()    Возвращает новый массив, содержащий только те элементы, которые прошли проверку.
// Примечания:
// filter() не изменяет исходный массив.
// filter() не вызывает функцию callback для элементов массива без значений.


// example 1
// Метод filter() фильтрует элементы по условию, указанному в функции:

const fruits = ['Ananas', 'Lemon', 'Orange', 'Lime', 'Plum'];
const result = fruits.filter(word => fruits.length < 5);
console.log(result); // Array ["Plum", "Lime"]


// example 2
// функция проверки чётных чисел

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function checkEven(number) {
    if (number % 2 == 0) return true;
    else return false;
}

// создание нового массива с элементами, прошедшими проверку на чётность
let evenNumbers = numbers.filter(checkEven);
console.log(evenNumbers); // Output: [ 2, 4, 6, 8, 10 ]


// example 3 
// Фильтрация элементов массива

const prices = [1800, 2000, null, 3000, 5000, "Thousand", 500, 8000];

function checkPrice(element) {
    return element > 2000 && !Number.isNaN(element);
}

let filteredPrices = prices.filter(checkPrice);
console.log(filteredPrices); // [ 3000, 5000, 8000 ]

// используем стрелочную функцию
let newPrices = prices.filter((price) => price > 2000 && !Number.isNaN(price));
console.log(newPrices); // [ 3000, 5000, 8000 ]
// Здесь отфильтровываются все числа, меньшие или равные 2000, а также все нечисловые значения.


// example 4
// Поиск в массиве

const languages = [
    "JavaScript",
    "Python",
    "Ruby",
    "C",
    "C++",
    "Swift",
    "PHP",
    "Java",
];

function searchFor(arr, query) {

    function condition(element) {
        return element.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    }

    return arr.filter(condition);
}

let newArr = searchFor(languages, "ja");
console.log(newArr); // [ 'JavaScript', 'Java' ]

// используем стрелочную функцию
const searchArr = (arr, query) => arr.filter((element) => element.toLowerCase().indexOf(query.toLowerCase()) !== -1);

let newLanguages = searchArr(languages, "p");
console.log(newLanguages); // [ 'JavaScript', 'Python', 'PHP' ]
// Здесь element и query преобразуются в нижний регистр, а метод indexOf() используется для проверки наличия query внутри element.

// Те элементы, которые не проходят проверку, отфильтровываются.


// example 5
// Создадим на основе массива, содержащего сведения о студентах, новый массив, в который попадут записи только о тех студентах, возраст которых позволяет им покупать спиртные напитки.

const studentsAge = [17, 16, 18, 19, 21, 17];
const ableToDrink = studentsAge.filter( age => age > 18 );
// Массив ableToDrink будет содержать два значения: [19, 21]