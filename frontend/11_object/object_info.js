// Основы синтаксиса JS
/* Литерал - фиксированное значение

25                  // Литерал целого числа                         
23.8                // Литерал дробного числа
'JavaScript'        // Литерал строки   
"JavaScript"        // Литерал строки   
[]                  // Литерал массива
[15, 7, 85]         // Литерал массива
{}                  // Литерал объекта
{                   
    name: 'Lil',    // Литерал объекта
    age: 33         
}                   
(ab|bc)             // Литерал регулярного выражения
*/

// Expressions - это комбинация значений, переменных и операторов, 
// которые либо присваивают переменнои значение, 
// либо возвращают какое то значение без его присваивания.

let num = 4; // выражение присвоения
'learn' + 'js' // выражение без присвоения

// Литерал объекта — это быстрый способ создания объекта вместе с его содержимым
/*
{ "key1": 99 }
key1 –– ключ, обязательно строковой
99 —— значение любого типа
*/


// OBJECTS

// example 1
let firstPart = "likes";
let user1 = {
    name: 'Lil', // ключ + значение
    age: 33,
    [firstPart + ' js']: true,
    // 'likes js': true, // висячая запятая
}

console.log(user1);              // { name: 'Lil', age: 33, 'likes js': true }
console.log(user1.name);         // Lil
console.log(typeof user1);       // object
console.log(user1['likes js']);  // true


// CREATE OBJECTS
let user2 = new Object(); // синтаксис 'конструктор объекта'
// let user2 = {};           // синтаксис 'Литерал объекта'


// Проверка существования свойства - ОПЦИОНАЛЬНАЯ ЦЕПОЧКА 
// example 2
let user3 = {
    name: 'Marina',
    age: 33,
    address: {
        city: 'Letojanni',
        street: 'Montebianco',
    }
}
console.log(user3.address.street); // Montebianco

// ОПЦИОНАЛЬНАЯ ЦЕПОЧКА - когда нужно сделать проверку на наличие объекта
console.log(user3?.address?.street);

// example 3
let user4 = {
    name: 'Marina',
    age: 33,
    address: {
        street: {
            name: 'Montebianco',
        }
    }
}

let user5 = {
    name: 'Kate',
    age: 30,
}

const getUserInfo = (obj) => {
    console.log(obj.address && obj.address.street ? obj.address.street.name : undefined)
}

getUserInfo(user4); // Montebianco
getUserInfo(user5); // undefined

// ОПЦИОНАЛЬНАЯ ЦЕПОЧКА
const getUserInfo = (obj) => {
    console.log(obj.address?.street?.name)
}


// example 4
let user6 = {
    name: 'Kate',
    age: 23,
    // функции в объектах называются методами 
    // sayHi() {
    //     alert('Hello')
    // }
}

user6.sayHi?.();


// example 5
let user7 = {
    name: 'Kate',
    age: 23,
    'contact address': {
        street: {
            name: 'Montebianco',
            apt: 16,
        }
    }
}

const getUserInfo = (obj) => {
    console.log(obj['contact address']?.street);
}

getUserInfo(user7); // { name: 'Montebianco', apt: 16 }


// example 6
// delete property of object ОПЦИОНАЛЬНАЯ ЦЕПОЧКА

delete user7?.['contact address'];
console.log(user7); // { name: 'Kate', age: 23 }



// Оператор in - использовать необходимо когда свойство существует но его значение undefinded
// example 7
if ('name' in user7) {
    console.log(user7.name); // Kate
}


// Цикл for_in

// Для перебора всех свойств объекта
// Это цикл отличается от цикла for(;;)

for (let keyKey in object) {
    // тело цикла выполняется для каждого свойства объекта
}

// example 8
for (let key in user7) {
    //ключи
    console.log(key);
    // начение ключей
    console.log(user7[key]);
}

// output
// name
// Kate
// age
// 23
// contact address
// { street: { name: 'Montebianco', apt: 16 } }


// example 9 - for in & клонирование ссылки объекта
let user8 = {
    name: 'Kate',
    age: 23,
    address: {
        street: 'Montebianco',
    }
}

let clone1 = {}; 

for (let key in user8) {
    // copy object (the same link but diffrient objects)
    clone1[key] = user8[key];
}
console.log(user8); // { name: 'Kate', age: 23, address: { street: 'Montebianco' } }
console.log(clone1); // { name: 'Kate', age: 23, address: { street: 'Montebianco' } }

// sravnenie 
console.log(user8 == clone1); // false
console.log(user8 === clone1); // false

clone1.age = 40;
console.log(user8.age); // 23
console.log(clone1.age); // 40


// example 10 - клонирование объекта
let user9 = {
    name: 'Tom',
    age: 18,
    sizes: {
        height: 175,
        weight: 80,
    }
}
let user10 = {
    surname: 'Miller',
}
let clone2 = Object.assign({}, user9, user10); // konstruktor sozdaniya object

console.log(user9); // { name: 'Tom', age: 18, sizes: { height: 175, weight: 80 } }
console.log(user10); // { surname: 'Miller' }
console.log(clone2); // { name: 'Tom', age: 18, sizes: { height: 175, weight: 80 }, surname: 'Miller' }

clone2.sizes.weight = 85;
console.log(user9.sizes.weight); // 85
console.log(clone2.sizes.weight); // 85
console.log(user9.sizes.weight == clone2.sizes.weight); // true 
console.log(user9.sizes.weight === clone2.sizes.weight); // true


// Методы объекта
// example 11
let user11 = {
    name: 'Marina',
    age: 33,
    address: {
        city: 'Letojanni',
        street: 'Montebianco',
    },

    /* showInfo: function() {
        console.log(`${user9.name}, ${user9.age} лет. Адрес: г. ${user9.address.city}, ул. ${user9.address.city}`);
    } */
// более короткая запись
    showInfo() {
    console.log(`${user11.name}, ${user11.age} лет. Адрес: г. ${user11.address.city}, ул. ${user11.address.street}`);
    }
}

user11.showInfo(); // Marina, 33 лет. Адрес: г. Letojanni, ул. Montebianco


// Использование this (this обращается к первому родительскому блоку в доп вложенности метод this работать не будет)
// только в стрелочные функции возможно вкладывать и использовать там this 

// example 12
let user12 = {
    name: 'Kate',
    age: 23,
    address: {
        city: 'Moscow',
        street: 'Lenina',
    },
    showInfo() {
        console.log(`${this.name}, ${this.age} лет. Адрес: г. ${this.address.city}, ул. ${this.address.street}`);
    },
}
user12.showInfo(); // Kate, 23 лет. Адрес: г. Moscow, ул. Lenina


// example 13 - Методы объекта
let user13 = {
    name: 'Kate',
    age: 23,
}

// user13.showInfo = function() {
//     console.log(`${this.name}, ${this.age} лет.`);
// }
// console.log(user13); // { name: 'Kate', age: 23, showInfo: [Function (anonymous)] }
// user13.showInfo(); // Kate, 23 лет.

function showInfo() {
    console.log(`${this.name}, ${this.age} лет.`);
}

user13.showInfo = showInfo;
console.log(user13); // { name: 'Kate', age: 23, showInfo: [Function: showInfo] }

user13.showInfo(); // Kate, 23 лет.


// example 14 - Методы объекта + THIS
let user14 = {
    name: 'Tom',
    age: 18,
    showInfo() {
    console.log(`${this.name}, ${this.age} лет.`); // this === user13
    }
}
console.log(user14); // { name: 'Tom', age: 18, showInfo: [Function: showInfo] }
user13.showInfo(); // Tom, 18 лет.


let admin = user14;
user14 = null;
console.log(admin); // { name: 'Tom', age: 18, showInfo: [Function: showInfo] }
console.log(user14); // null

admin.showInfo(); // Tom, 18 лет.


// example 15
function sayHi() {
    console.log(`Hi ${this.name}!`);
}

let user15 = {name: 'Love'};
let admin2 = {name: 'Five'};

user15.f = sayHi;
admin2.f = sayHi;

user15.f(); // Hi Love!
admin2.f(); // Hi Five!


// THIS and ARROW function doesnt work - shows undefined

const sayHi = () => {
    console.log(`Hi ${this.name}!`);
}

let user15 = {name: 'Love'};
let admin2 = {name: 'Five'};

user15.f = sayHi;
admin2.f = sayHi;

user15.f(); // Hi undefined!
admin2.f(); // Hi undefined!


// put the Arrow Function inside the Function Declaration + THIS

function newF() {
    const sayHi = () => {
        console.log(`Hi ${this.name}!`);
    }
    sayHi();
}

let user15 = {name: 'Love'};
let admin2 = {name: 'Five'};

user15.f = newF;
admin2.f = newF;

user15.f(); // Hi Love!
admin2.f(); // Hi Five!