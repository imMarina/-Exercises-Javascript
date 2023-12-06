// Задача 11.4
// Используя объект из предыдущего задания, вывести в консоль имя и значение каждого свойства.

const dog = {
	name: "Рекс",
	age: 3,
	breed: "Немецкая овчарка",
	city: "Москва",
	address: "ул. Ленина, 2",
};

//output
// "name: Рекс"
// "age: 3"
// "breed: Немецкая овчарка"
// "city: Москва"
// "address: ул. Ленина, 2"


// solution 1
let arrOfArrays = Object.entries(dog);
arrOfArrays.forEach((arr) => {
    console.log(`"${arr[0]}: ${arr[1]}"`);
});
// [
//     [ 'name', 'Рекс' ],
//     [ 'age', 3 ],
//     [ 'breed', 'Немецкая овчарка' ],
//     [ 'city', 'Москва' ],
//     [ 'address', 'ул. Ленина, 2' ]
// ]


// solution 2 - for in
for (const nameProp in dog) {
    console.log(`"${nameProp}: ${dog[nameProp]}"`);
}


// solution 3 - деструктуризация массива
let result = Object.entries(dog);
result.forEach(([key, value]) => { // деструктуризация массива []
    console.log(`"${key}: ${value}"`);
});



// example 1 - деструктуризация массива
const arr = ["name", "Рекс"];
const [key, value] = arr;
console.log(key); // name
console.log(value); // Рекс

// example 2 - деструктуризация массива
const arr2 = ["name", "Рекс", 4, 54, 64];
const [key, value, ...arr3] = arr2;
console.log(arr3); // [ 4, 54, 64 ]

const {name: n, age: a} = dog; // zapisyvaem imena svoistv v peremennye
console.log(n); // Рекс
console.log(a); // 3
console.log(dog); // object pri etom ne izmenilsya


const {name: n, age: a, ...b} = dog;
console.log(n, a, b); // Рекс 3 { breed: 'Немецкая овчарка', city: 'Москва', address: 'ул. Ленина, 2' }
console.log(b); // { breed: 'Немецкая овчарка', city: 'Москва', address: 'ул. Ленина, 2'


