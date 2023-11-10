// method join

// Метод  join() возвращает новую строку, где объединены все элементы массива. 
// Разделитель элементов по умолчанию — запятая (,). Этот метод не меняет первоначальный массив.

// Преобразует все элементы массива в строки и объединяет их в одну большую строку. Элемент массива с типом undefined или null преобразуется в пустую строку.


// syntax mozilla docs
arr.join([separator])

// Параметры
// separator (Необязательный) - Определяет строку, разделяющую элементы массива. 
// В случае необходимости тип разделителя приводится к типу Строка. 
// Если он не задан, элементы массива разделяются запятой ','. 
// Если разделитель - пустая строка, элементы массива ничем не разделяются в возвращаемой строке.

// return value
// Строка, содержащая все элементы массива. Если arr.length == 0, то будет возвращена пустая строка.


// example 1
array = ["Один", "Два", "Три", "Четыре"];
array.join("-"); // Один-Два-Три-Четыре


// example 2
const fruits = ['Ananas', 'Lime', 'Lemon'];
console.log(fruits.join()); // "Ananas, Lime, Lemon"


// example 3
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join()); // Expected output: "Fire,Air,Water"
console.log(elements.join('')); // Expected output: "FireAirWater"
console.log(elements.join('-')); // Expected output: "Fire-Air-Water"


// example 4
let a = ["Ветер", "Дождь", "Огонь"];
let myVar1 = a.join(); // присвоит 'Ветер,Дождь,Огонь' переменной myVar1
let myVar2 = a.join(", "); // присвоит 'Ветер, Дождь, Огонь' переменной myVar2
let myVar3 = a.join(" + "); // присвоит 'Ветер + Дождь + Огонь' переменной myVar3
let myVar4 = a.join(""); // присвоит 'ВетерДождьОгонь' переменной myVar4
