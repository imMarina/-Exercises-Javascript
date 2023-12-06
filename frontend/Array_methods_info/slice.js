// method SLICE
// Метод slice() возвращает новый массив, содержащий копию части исходного массива.


// syntax by mozilla docs
arr.slice([begin[, end]])

// begin (Необязательный) - Индекс (счёт начинается с нуля), по которому начинать извлечение.
//     Если индекс отрицательный, begin указывает смещение от конца последовательности. Вызов slice(-2) извлечёт два последних элемента последовательности.
//     Если begin не определён, slice() начинает работать с индекса 0.
//     Если begin больше длины последовательности вернётся пустой массив.

// end (Необязательный) Индекс (счёт начинается с нуля), по которому заканчивать извлечение. 
// Метод slice() извлекает элементы с индексом меньше end.
//     Вызов slice(1, 4) извлечёт элементы со второго по четвёртый (элементы по индексам 1, 2 и 3).
//     Если индекс отрицательный, end указывает смещение от конца последовательности. Вызов slice(2, -1) извлечёт из последовательности элементы начиная с третьего элемента с начала и заканчивая вторым с конца.
//     Если end опущен, slice() извлекает все элементы до конца последовательности (arr.length).

// return value 
// Новый массив, содержащий извлечённые элементы.

// Примечание
// Метод slice() не изменяет исходный массив, а возвращает новую «одноуровневую» копию, содержащую копии элементов, вырезанных из исходного массива.


// example 1
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2)); // Expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4)); // Expected output: Array ["camel", "duck"]
console.log(animals.slice(1, 5)); // Expected output: Array ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(-2)); // Expected output: Array ["duck", "elephant"]
console.log(animals.slice(2, -1)); // Expected output: Array ["camel", "duck"]
console.log(animals.slice()); // Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]


// example 2
// Пример: наши хорошие друзья цитрусовые среди фруктов
let fruits = ["Банан", "Апельсин", "Лимон", "Яблоко", "Манго"];
let citrus = fruits.slice(1, 3); // citrus содержит ['Апельсин', 'Лимон']