// method PUSH
// Метод push() добавляет один или более элементов в конец массива и возвращает новую длину массива.

// syntax by mozilla docs
arr.push(element1, ..., elementN)

// Параметры
// elementN - Элементы, добавляемые в конец массива.
// return value:
// Новое значение свойства length объекта, для которого был вызван данный метод.


// example 1 Пример: добавление элементов в массив
let sports = ["футбол", "бейсбол"];
let total = sports.push("американский футбол", "плавание");
console.log(sports); // ['футбол', 'бейсбол', 'американский футбол', 'плавание']
console.log(total); // 4


// example 2 - Пример: слияние двух массивов
var vegetables = ["пастернак", "картошка"];
var moreVegs = ["сельдерей", "свёкла"];

// Сливает второй массив с первым
// Эквивалентно вызову vegetables.push('сельдерей', 'свёкла');
Array.prototype.push.apply(vegetables, moreVegs);
console.log(vegetables); // ['пастернак', 'картошка', 'сельдерей', 'свёкла']


// Методы push() и pop()
// push() — вставить элемент в конец массива.
// pop() — исключает элемент из конца массива.

// Метод push() добавляет новые элементы в конец массива. 
// Так, длина массива меняется.

// example - push / pop
const fruits = ["Ananas", "Orange", "Lemon", "Plum"];
fruits.push("Lime");
console.log(fruits); // ["Ananas", "Orange", "Lemon", "Plum","Lime"];

// удалить элементы из массива в JS — использование метода pop(). При его вызове удаляется элемент из конца массива.
const fruits = ["Ananas", "Orange", "Lemon", "Plum"];
fruits.pop(); // удаляем Plum
console.log(fruits); // ["Ananas", "Orange", "Lemon"];