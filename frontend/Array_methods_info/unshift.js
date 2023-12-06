// method UNSHIFT
// Метод unshift() экземпляров Array добавляет указанные элементы в начало массива и возвращает новую длину массива.

// syntax by mozilla docs
unshift()
unshift(element1)
unshift(element1, element2)
unshift(element1, element2, /* …, */ elementN)

// Параметры
// element1, ..., elementN - Элементы, добавляемые на переднюю часть .arr

// return value
// Новое свойство length объекта, для которого выполняется метода.

// Описание
// Метод вставляет заданные значения в начало массивоподобный объект. unshift()
// если в качестве параметров передается несколько элементов, они вставляются в в начале объекта, в том же порядке, в котором они были переданы как Параметры. 
// Следовательно, вызов с аргументами один раз или вызов с 1 аргументом (например, с циклом) не дает одинаковых результатов. unshift()nn


// example 1
let arr = [4, 5, 6];

arr.unshift(1, 2, 3);
console.log(arr); // [1, 2, 3, 4, 5, 6]

arr = [4, 5, 6]; // resetting the array

arr.unshift(1);
arr.unshift(2);
arr.unshift(3);

console.log(arr); // [3, 2, 1, 4, 5, 6]


// example 2
const fruits = ["Ananas", "Orange", "Lemon", "Plum"];
fruits.unshift("Mango");
// Теперь фруктов стало больше: ["Mango","Ananas", "Orange", "Lemon", "Plum"];


// example 3
const arr = [1, 2];

arr.unshift(0); // result of the call is 3, which is the new array length
// arr is [0, 1, 2]

arr.unshift(-2, -1); // the new array length is 5
// arr is [-2, -1, 0, 1, 2]

arr.unshift([-4, -3]); // the new array length is 6
// arr is [[-4, -3], -2, -1, 0, 1, 2]

arr.unshift([-7, -6], [-5]); // the new array length is 8
// arr is [ [-7, -6], [-5], [-4, -3], -2, -1, 0, 1, 2 ]


// example 4 - Вызов unshift() для объектов, не являющихся массивами

const arrayLike = {
    length: 3,
    unrelated: "foo",
    2: 4,
};

    Array.prototype.unshift.call(arrayLike, 1, 2);
    console.log(arrayLike);
    // { '0': 1, '1': 2, '4': 4, length: 5, unrelated: 'foo' }
    
    const plainObj = {};
    // There's no length property, so the length is 0
    Array.prototype.unshift.call(plainObj, 1, 2);
    console.log(plainObj);
    // { '0': 1, '1': 2, length: 2 }
