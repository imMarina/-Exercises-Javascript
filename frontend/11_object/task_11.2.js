// Задача 11.2
// Дан объект. Вывести в консоль названия всех его свойств.

const dog = {
	name: "Рекс",
	age: 3,
	breed: "Немецкая овчарка",
	city: "Москва",
	address: "ул. Ленина, 2",
};

//output
// name
// age
// breed
// city
// address


let keys = Object.keys(dog);
keys.forEach((key) => {
    console.log(key);
});