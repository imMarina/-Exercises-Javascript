// method CONCAT
// Метод concat() возвращает новый массив, состоящий из массива, на котором он был вызван, соединённого с другими массивами и/или значениями(данными), переданными в качестве аргументов.

// example:
array = ["Один", "Два", "Три", "Четыре"];
array.concat(12); // ["Один", "Два", "Три", "Четыре", 12]

// example 2:
const fruits = ['Ananas', 'Lime', 'Lemon'];
const vegetables = ['Potato', 'Onion', 'Carrot'];
const merged = fruits.concat(vegetables); // ["Ananas", "Lime", "Lemon", "Potato", "Onion", "Carrot"];


// Syntax by mozilla docs
let new_array = old_array.concat(value1[, value2[, ...[, valueN]]]);
// valueN - Массивы и/или значения, соединяемые в новый массив

