// method EVERY
// Array.prototype.every()

// Метод every() проверяет, все ли элементы массива проходят заданную тестовую функцию.
arr.every(callback(currentValue), thisArg);  Где arr - это массив.
// thisArg (необязательно) - значение, используемое в качестве this, при вызове функции callback. По умолчанию определен как undefined.
// Возвращает true, если все элементы массива проходят проверку заданной функции (callback возвращает истинное значение).


// Syntax by mozilla docs
arr.every(callback(currentValue[, index[, array]])[, thisArg])  
// Метод every() принимает:
// callback функцию для проверки каждого элемента массива.  
// currentValue - Текущий обрабатываемый элемент массива.
// index (Необязательный) - Индекс текущего обрабатываемого элемента массива.
// array (Необязательный) - Массив, по которому осуществляется проход. 


// Примечания:
// every() не изменяет исходный массив.
// every() не вызывает функцию callback для элементов массива без значений.



// example 1
// Проверяем значение элемента массива
function checkAdult(age) {
    return age >= 18;
}

const ageArray = [34, 23, 20, 26, 12];
let check = ageArray.every(checkAdult); // false

if (!check) {
    console.log("All members must be at least 18 years of age.");
}

// используем стрелочную функцию
let check1 = ageArray.every((age) => age >= 18); // false
console.log(check1);
// All members must be at least 18 years of age.


// example 2
// Проверим, все ли оценки, хранящиеся в массиве, равны или больше чем 3.

const ratings = [3, 5, 4, 3, 5];
const goodOverallRating = ratings.every( rating => rating >= 3 ); // true
