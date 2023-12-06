// method lastIndexOf

// Метод lastIndexOf() служит для поиска индекса последнего элемента. Он определён для массивов и строк.
// Метод lastIndexOf() сравнивает искомый элемент searchElement с элементами в массиве, используя строгое сравнение (en-US) (тот же метод используется оператором ===, тройное равно).
// При вызове этого метода нужно передать элемент, который нужно найти в массиве или подстроку при поиске в строке. 
// Метод вернёт индекс последнего вхождения. Если ничего не найдено, то вернётся -1.

// lastIndexOf() работает аналогично методу Array.indexOf(), но начинает поиск с конца массива.

// Syntax
arr.lastIndexOf(searchElement[, fromIndex])

// searchElement - элемент, который нужно найти в массиве.
// fromIndex (необязательный) - индекс, начиная с которого нужно начать поиск. Если не указан, поиск будет осуществляться с конца массива.

// return value
// Метод lastIndexOf() просматривает массив или строку справа налево. 
// Если ничего не найдено, метод возвращает -1.
// Для массива lastIndexOf() возвращает индекс последнего вхождения.
// Для строки все то же самое, но поиск ведётся по подстрокам и возвращается индекс начала последнего вхождения подстроки.


// example 1 - array
const arr = [2, 5, 9, 2];
console.log(arr.lastIndexOf(2)); // 3
console.log(arr.lastIndexOf(7)); // -1


// example 2 - string
console.log("раз собачка, два собачка".lastIndexOf("собачка")); // 17


// example 3
var array = [2, 5, 9, 2];
array.lastIndexOf(2); // 3
array.lastIndexOf(7); // -1
array.lastIndexOf(2, 3); // 3
array.lastIndexOf(2, 2); // 0
array.lastIndexOf(2, -2); // 0
array.lastIndexOf(2, -1); // 3


// example 4
// метод lastIndexOf() используется для поиска всех индексов элемента в указанном массиве, которые с помощью метода push() добавляются в другой массив.

var indices = [];
var array = ["a", "b", "a", "c", "a", "d"];
var element = "a";
var idx = array.lastIndexOf(element);
while (idx != -1) {
    indices.push(idx);
    idx = idx > 0 ? array.lastIndexOf(element, idx - 1) : -1;
}

console.log(indices); // [4, 2, 0]

