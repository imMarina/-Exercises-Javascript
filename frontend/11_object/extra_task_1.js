// Описание задачи: 
// Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом, null и т.п.
//   Ожидаемый результат: true если это объект, false в противном случае. ({ a: 1 }) => true, ([1, 2, 3]) => false
//   Сложность задачи: 1 of 5

const isPlainObject = (element) => (Object.prototype.toString.call(element) === "[object Object]") ? true : false;

// Object.prototype.toString.call(). 
// Этот метод возвращает строку, представляющую конкретный тип объекта. Если переменная является объектом, полученная строка будет иметь следующий вид: «[object Object]».

const data = { a: 1 };
console.log(isPlainObject(data)); // true

const data2 = [1, 'hj'];
console.log(isPlainObject(data2)); // false

const data3 = {};
console.log(isPlainObject(data3)); // true

const data4 = undefined;
console.log(isPlainObject(data4)); // false

const isPlainObject2 = (element) => typeof element === 'object' && !Array.isArray(element) && element !== null;

// Определение типа данных переменной
// В JavaScript существуют несколько способов определить тип данных переменной:

// Использовать оператор typeof. Этот оператор возвращает строку, указывающую тип операнда.
// Использовать метод Object.prototype.toString. Этот метод возвращает строку, представляющую тип объекта.
// Примеры:

// // Использование оператора typeof
// typeof variable === "string"
// // Использование метода Object.prototype.toString
// Object.prototype.toString.call(variable) === "[object String]"
// С помощью этих методов можно определить тип данных различных переменных, таких как строки, числа, булевы значения, массивы и объекты.

// Важно помнить, что оператор typeof может не всегда верно определять типы данных. Например, для массивов и null он возвращает тип «object». В таких случаях рекомендуется использовать метод Object.prototype.toString для более точного определения типа данных.

