// Задача 11.5

// Дан объект. Написать функцию, которая будет возвращать новый объект, в котором имена и значения свойств поменяются местами. 
// Для решения задачи потребуется метод объектов, который в практикуме не описывался, его можно найти в документации.

// input
const dog = {
	name: "Рекс",
	age: 3,
	home: "Москва",
};

// output
// const dog = {
// 	"Рекс": "name",
// 	"3": "age",
// 	"Москва": "home",
// };


// example 1 by Object.entries()
function changePosition(obj) {
    let arrOfProperties = Object.entries(obj); 
    // console.log(arrOfProperties) // [ [ 'name', 'Рекс' ], [ 'age', 3 ], [ 'home', 'Москва' ] ]

    let newArr = arrOfProperties.map(([key, value]) => [value, key]);
    // console.log(newArr) // [ [ 'Рекс', 'name' ], [ 3, 'age' ], [ 'Москва', 'home' ] ]

    let newObj = Object.fromEntries(newArr);
    // console.log(newObj); // { '3': 'age', 'Рекс': 'name', 'Москва': 'home' }

    return newObj;
}

console.log(changePosition(dog)); // { '3': 'age', 'Рекс': 'name', 'Москва': 'home' }



// draft
let keys = Object.keys(dog);
// console.log(keys);

let values = [];
for (let value of Object.values(dog)) {
    let str = value.toString();
    // console.log(str);
    values.push(str);
}
// console.log(values);

let newObj = {};

for (let i = 0; i < values.length; i++) {
    console.log(`'${values[i]}': '${keys[i]}'`);
}

// 'Рекс': 'name'
// '3': 'age'
// 'Москва': 'home'


// example 2 by Object.keys()
function changePosition(mainObj) {
    let newObj = {};
    Object.entries(mainObj).forEach(([key, value]) => {
        newObj[value] = key;
    });
    return newObj;
}

console.log(changePosition(dog)); // { '3': 'age', 'Рекс': 'name', 'Москва': 'home' 