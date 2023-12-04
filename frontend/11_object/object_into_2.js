// Функция конструктор

/* Обычный синтаксис создания объекта позволяет создать только один объект. 
Но зачастую нам необходимо создать множество однотипных объектов таких как пользователи, элементы меню и тд.
Это можно сделать при помощи функции конструтктора и оператора new.
*/

/* Функции конструкторы явл обычными функциями. Но есть два правила:
1. Имя функции - с большой буквы
2. Функ конст должна вызываться при помощи оператора new
*/

function UserInfoConstructor(name) {

    // this = {}; создается пустой объект (не явно)

    this.name = name;
    this.age = 30;

    // return this; возвращается объект (не явно)
}

console.log(new UserInfoConstructor('Marina')); // UserInfoConstructor { name: 'Marina', age: 30 }
console.log(new UserInfoConstructor('Kate')); // UserInfoConstructor { name: 'Kate', age: 30 }


// Получить сведения objects / arrays
// массив с объектами, описывающими группу студентов:

const students = [
    {
        name: 'Алексей',
        age: 17,
        grade: 11,
        hobbies: ['футбол', 'музыка', 'компьютерные игры'],
        favoriteSubject: 'математика'
    },
    {
        name: 'Екатерина',
        age: 16,
        grade: 10,
        hobbies: ['балет', 'рисование', 'чтение'],
        favoriteSubject: 'литература'
    },
    {
        name: 'Максим',
        age: 15,
        grade: 9,
        hobbies: ['плавание', 'музыка', 'путешествия'],
        favoriteSubject: 'химия'
    },
];

// Получить сведения о первом ученике можно уже известным нам способом — указав индекс в квадратных скобках:

students[0]; //{name: 'Алексей', age: 17, grade: 11, hobbies: Array(3), favoriteSubject: 'математика'}

// А если нужно только имя первого ученика, достаточно указать ключ объекта в еще одних квадратных скобках, следом за индексом:

students[1].favoriteSubject; //литература

// 🖇️ Обращение к значениям через точку можно использовать только с объектами, для массивов она не подходит


// У вас есть массив events, который содержит объекты, представляющие различные события. Каждый объект имеет два свойства: name (название события) и date (дата события). Вам необходимо отсортировать массив events по возрастанию даты событий. Для этого вы будете использовать метод sort().
// В функции сравнения, переданной в метод sort(), вы должны сравнивать даты двух событий, представленных объектами a и b. Для сравнения дат используется оператор вычитания (a.date - b.date).
const events = [
    { name: 'Event 1', date: new Date('2022-01-15') },
    { name: 'Event 2', date: new Date('2021-12-10') },
    { name: 'Event 3', date: new Date('2022-03-05') }
];

events.sort(function(a, b) {
    return a.date - b.date;
});

console.log(events);
  // [
  //   { name: 'Event 2', date: '2021-12-10' },
  //   { name: 'Event 1', date: '2022-01-15' },
  //   { name: 'Event 3', date: '2022-03-05' }
  // ]



// Objects - create, how to use, examples
// example 1

let newObj = {
    firstName: 'Marina',
    age: 34,
    city: "Москва",
    address: "Ленина 2",
};


// удаление свойства объекта DELETE
delete newObj.city;
console.log(newObj); // { firstName: 'Marina', age: 34, address: 'Ленина 2' }

// затирание свойства
newObj.address = undefined;
console.log(newObj); // { firstName: 'Marina', age: 34, address: undefined }


// массив массивов
let array1 = Object.entries(newObj);
console.log(array1); 
// [
//     [ 'firstName', 'Marina' ],
//     [ 'age', 34 ],
//     [ 'city', 'Москва' ],
//     [ 'address', 'Ленина 2' ]
// ]


// массивы свойств объекта
for(const elem of array1) {
    console.log(elem);
    // [ 'firstName', 'Marina' ]
    // [ 'age', 34 ]
    // [ 'city', 'Москва' ]
    // [ 'address', 'Ленина 2' ]
}


// свойства объекта: ключ, значение

Object.entries(newObj).forEach(([key, value]) => console.log(`${key}, ${value}`))
// firstName, Marina
// age, 34
// city, Москва
// address, Ленина 2


// example 2 - Работа с двумя массивами объектов

let array2 = ["1", "2", "3"];
let array3 = ["a", "b", "c"];

let newArr = array2.map((elem, index) => {
    let newElem = {};
    
    newElem.number = elem;
    newElem.char = array3[index];
    
    return newElem;
});

console.log(newArr);
// [
//     { number: '1', char: 'a' },
//     { number: '2', char: 'b' },
//     { number: '3', char: 'c' }
// ]


// example 3 - Работа с массивами объектов
let array4 = [
	{
		id: 101,
		name: "Юрий",
		age: 28,
	},
    {
		id: 102,
		name: "Юлия",
		age: 20,
	},
    {
		id: 104,
		name: "Максим",
		age: 45,
	},
    {
		id: 105,
		name: "Александр",
		age: 3,
	},
    {
		id: 106,
		name: "Ирина",
		age: 34,
	},
]

let newArr2 = arr.filter((elem) => elem.age < 18);
console.log(newArr2); 
// output
// [ { id: 105, name: 'Александр', age: 3 } ]


// example 4 - Работа с массивами объектов
let array5 = [
	{
		id: 101,
		name: "Юрий",
		age: 28,
        address: {
            city: "Москва",
            street: "Ленина",
            number: 12,
        }
	},
    {
		id: 102,
		name: "Юлия",
		age: 20,
        address: {
            city: "Kazan",
            street: "Ленина",
            number: 12,
        }
	},
    {
		id: 104,
		name: "Максим",
		age: 45,
        address: {
            city: "Ufa",
            street: "Ленина",
            number: 12,
        }
	}
]

let newArr3 = array5.filter((elem) => elem.address.city === "Kazan");
console.log(newArr3);
// output
// [
//     {
//       id: 102,
//       name: 'Юлия',
//       age: 20,
//       address: { city: 'Kazan', street: 'Ленина', number: 12 }
//     }
//   ]



let arrUsers = []; id: 2
let arrAddresses = []; userID: 2

let newArr4 = arrUsers.map((user) => {
    let newElem = {
    	name: user.name,
        address: arrAddresses.find((address) => address.userID === user.id);
    }
    return newElem;
});
console.log(newArr4);


// Деструктуризация объектов в JavaScript
let obj = {
	year:  2025,
	month: 12,
	day:   31,
};

let {year, month, day} = obj;

console.log(year);  // выведет 2025
console.log(month); // выведет 12
console.log(day);   // выведет 31



// Object.keys, values, entries
// Для простых объектов доступны следующие методы:

// Object.keys(obj) – возвращает массив ключей.
// Object.values(obj) – возвращает массив значений.
// Object.entries(obj) – возвращает массив пар [ключ, значение].

let user = {
    name: "John",
    age: 30
};

Object.keys(user) // ["name", "age"]
Object.values(user) // ["John", 30]
Object.entries(user) // [ ["name","John"], ["age",30] ]