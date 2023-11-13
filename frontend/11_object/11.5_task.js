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