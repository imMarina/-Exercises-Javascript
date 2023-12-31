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

// create object by function
function createUser(name, age) {
    return {
        name,
        age,
    }
}
const newUser = createUser('Lily', 25);
console.log(newUser); // { name: 'Lily', age: 25 }


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


// example 5
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


// example 6 - Деструктуризация объектов в JavaScript
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

// example 7
let user = {
    name: "John",
    age: 30
};

Object.keys(user) // ["name", "age"]
Object.values(user) // ["John", 30]
Object.entries(user) // [ ["name","John"], ["age",30] ]


// example 8 - for in 
let admin = {
    name: 'Kate',
    age: 23,

    // Целочисленное значение будет иметь наивысший приоритет и выводиться по порядку от наименьшего к наибольшему 
    '45': 45,
    5: '5',

    // Дробное будет последним
    '15,2': '15,2',
}
console.log(admin);
// output
{ 
//     '5': '5', 
//     '45': 45, 
//     name: 'Kate', 
//     age: 23, 
//     '15,2': '15,2' 
// }

for (let key in admin) {
    // show the keys
    console.log(key); // 5, 45, name, age, 15,2
    // show key + value
    console.log(admin[key]); // 5, 45, Kate, 23, 15,2
}

// Обратите внимание, что все конструкции «for» позволяют нам объявлять переменную внутри цикла, как, например, let key здесь.
// Кроме того, мы могли бы использовать другое имя переменной. Например, часто используется вариант "for (let prop in obj)".

// example 9 - свойства упорядочены особым образом: свойства с целочисленными ключами сортируются по возрастанию, остальные располагаются в порядке создания. Разберёмся подробнее.
// В качестве примера рассмотрим объект с телефонными кодами:
let codes = {
    "49": "Германия",
    "41": "Швейцария",
    "44": "Великобритания",
    // ..,
    "1": "США"
};

for (let code in codes) {
    alert(code); // 1, 41, 44, 49
}

// Целочисленные свойства? Это что?
// Термин «целочисленное свойство» означает строку, которая может быть преобразована в целое число и обратно без изменений.
// То есть, "49" – это целочисленное имя свойства, потому что если его преобразовать в целое число, а затем обратно в строку, то оно не изменится. А вот свойства "+49" или "1.2" таковыми не являются:
// Math.trunc - встроенная функция, которая удаляет десятичную часть
alert( String(Math.trunc(Number("49"))) ); // "49", то же самое ⇒ свойство целочисленное
alert( String(Math.trunc(Number("+49"))) ); // "49", не то же самое, что "+49" ⇒ свойство не целочисленное
alert( String(Math.trunc(Number("1.2"))) ); // "1", не то же самое, что "1.2" ⇒ свойство не целочисленное


// example 10 - checking for existence of an object property
// Проверка существования свойства, оператор «in»

const obj = {
    class: undefined,
}

console.log(obj.class); // undefined
console.log(obj.name); // undefined

console.log('class' in obj); // true
console.log('name' in obj); // false

// Обратите внимание, что слева от оператора in должно быть имя свойства. Обычно это строка в кавычках.
// Если мы опускаем кавычки, это значит, что мы указываем переменную, в которой находится имя свойства. Например:
let user = { age: 30 };
let key = "age";
alert( key in user ); // true, имя свойства было взято из переменной key


// example 11
// Квадратные скобки также позволяют обратиться к свойству, имя которого может быть результатом выражения. 
// Например, имя свойства может храниться в переменной:

let user = {
    name: "John",
    age: 30
};

let key = "name";
console.log( user.key); // undefined
console.log( user[key]); // John


// example 12
// Мы можем использовать квадратные скобки в литеральной нотации для создания вычисляемого свойства.

let fruit = prompt("Какой фрукт купить?", "apple");

let bag = {
  [fruit]: 5, // имя свойства будет взято из переменной fruit
};

alert( bag.apple ); // 5, если fruit="apple"
// Смысл вычисляемого свойства прост: запись [fruit] означает, что имя свойства необходимо взять из переменной fruit.
// И если посетитель введёт слово "apple", то в объекте bag теперь будет лежать свойство {apple: 5}.

// Подведём итог: в большинстве случаев, когда имена свойств известны и просты, используется запись через точку. Если же нам нужно что-то более сложное, то мы используем квадратные скобки.


// objects
// Дополнительные операторы:

// Удаление свойства: delete obj.prop.
// Проверка существования свойства: "key" in obj.
// Перебор свойств объекта: цикл for for (let key in obj).


// Метод constructor / class
// В JavaScript конструктор — это функция, которая создает объекты, давая им набор заранее определенных свойств и методов.
// Конструкторы называют с заглавной буквы, чтобы отличать их от обычных функций

// example 13
class Animal {
    constructor(color, type) {
        this.color = color;
        this.type = type;
    }
    showInfo() {
        console.log(`This is ${this.type}`)
    }
}

const animal1 = new Animal('white', 'dog');
const animal2 = new Animal('black', 'cat');

console.log(animal1); // Animal { color: 'white', type: 'dog' }
console.log(animal2); // Animal { color: 'black', type: 'cat' }
animal1.showInfo(); // This is dog
animal2.showInfo(); // This is cat


// example 14 - Сумма свойств объекта
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function sumSalaries(obj) {
    let array = Object.values(salaries); // [ 100, 160, 130 ]

    let initialValue = 0;
    let result = array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    return result;
}

// let sum = 0;
// for (let key in salaries) {
//      sum += salaries[key];
// }

console.log(sumSalaries(salaries)); // 390