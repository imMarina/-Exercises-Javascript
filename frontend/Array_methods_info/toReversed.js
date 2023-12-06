// method toReversed (добавлен в ES2023)
// Метод toReversed() меняет порядок элементов в массиве на обратный, как и метод reverse(), 
// но возвращает новый массив:


// syntax by mozilla docs
toReversed()

// return value
// Новый массив, содержащий элементы в обратном порядке.

// Метод транспонирует элементы вызывающего объекта массива в обратном порядке и возвращает новый массив.toReversed()
// При использовании с разреженными массивами метод перебирает пустые слоты, как если бы они имели значение .toReversed()undefined
// Метод является универсальным. Он только ожидает, что значение будет иметь свойство и свойства с целочисленным ключом.toReversed()thislength


// example 1
const a = [2, 3, 6, 1];
const c = a.toReversed();
console.log(a) // вывод: [2, 3, 6, 1]
console.log(c) // вывод: [1, 6, 3, 2]


// example 2 - Обращение элементов в массиве
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]

// example 3 - Использование toReversed() в разреженных массивах
console.log([1, , 3].toReversed()); // [3, undefined, 1]
console.log([1, , 3, 4].toReversed()); // [4, 3, undefined, 1]