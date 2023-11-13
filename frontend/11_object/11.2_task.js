// Задача 11.2

// Допустим, что с бекенда приходит массив объектов со свойствами: `{n: “Алексей”, a: 24, h: “Москва”, p: “курьер”, c: “Toyota”}`. Написать функцию, которая будет возвращать новый массив объектов, в которых имена свойств будут соответствовать их значениям, например, `n` заменится на `name` и т.д. 
// При выполнении задачи исходный массив самостоятельно дополнить 4-5 объектами.

// input
// [
// 	{n: "Алексей", a: 24, h: "Москва", p: "курьер", c: "Toyota"},
// 	{n: "Евгения", a: 32, h: "Тюмень", p: "юрист", c: "Nissan"},
// 	...
// ]

const arrObjects = [
  {n: "Алексей", a: 24, h: "Москва", p: "курьер", c: "Toyota"},
  {n: "Евгения", a: 32, h: "Тюмень", p: "юрист", c: "Nissan"},
  {n: "Марина", a: 32, h: "Уфа", p: "маркетолог", c: "BMW"},
  {n: "Екатерина", a: 32, h: "Ярославль", p: "бухгалтер", c: "Ford"},
  {n: "Никита", a: 32, h: "Казань", p: "логист", c: "Mercedes"},
]


// by method DELETE of Object Properties
function changeNameOfKeys(array) {
  return array.map(elem => {
        elem.name = elem.n;
        elem.age = elem.a;
        elem.home = elem.h;
        elem.profession = elem.p;
        elem.car = elem.c;
        delete elem.n;
        delete elem.a;
        delete elem.h;
        delete elem.p;
        delete elem.c;
        // elem.n = undefined;
        return elem;
  });
}

let result = changeNameOfKeys(arrObjects);
console.log(result);
// output
// [
//   {
//     name: 'Алексей',
//     age: 24,
//     home: 'Москва',
//     profession: 'курьер',
//     car: 'Toyota'
//   },
//   {
//     name: 'Евгения',
//     age: 32,
//     home: 'Тюмень',
//     profession: 'юрист',
//     car: 'Nissan'
//   },
//   {
//     name: 'Марина',
//     age: 32,
//     home: 'Уфа',
//     profession: 'маркетолог',
//     car: 'BMW'
//   },
//   {
//     name: 'Екатерина',
//     age: 32,
//     home: 'Ярославль',
//     profession: 'бухгалтер',
//     car: 'Ford'
//   },
//   {
//     name: 'Никита',
//     age: 32,
//     home: 'Казань',
//     profession: 'логист',
//     car: 'Mercedes'
//   }
// ]


// by erasing of Object Properties
function changeNameOfKeys(array) {
  return array.map(elem => {
        elem.name = elem.n;
        elem.age = elem.a;
        elem.home = elem.h;
        elem.profession = elem.p;
        elem.car = elem.c;

        elem.n = undefined;
        elem.a = undefined;
        elem.h = undefined;
        elem.p = undefined;
        elem.c = undefined;
        return elem;
  });
}

let result = changeNameOfKeys(arrObjects);
console.log(result);
// out put
// [
//   {
//     n: undefined,
//     a: undefined,
//     h: undefined,
//     p: undefined,
//     c: undefined,
//     name: 'Алексей',
//     age: 24,
//     home: 'Москва',
//     profession: 'курьер',
//     car: 'Toyota'
//   },
//   {
//     n: undefined,
//     a: undefined,
//     h: undefined,
//     p: undefined,
//     c: undefined,
//     name: 'Евгения',
//     age: 32,
//     home: 'Тюмень',
//     profession: 'юрист',
//     car: 'Nissan'
//   },
//   {
//     n: undefined,
//     a: undefined,
//     h: undefined,
//     p: undefined,
//     c: undefined,
//     name: 'Марина',
//     age: 32,
//     home: 'Уфа',
//     profession: 'маркетолог',
//     car: 'BMW'
//   },
//   {
//     n: undefined,
//     a: undefined,
//     h: undefined,
//     p: undefined,
//     c: undefined,
//     name: 'Екатерина',
//     age: 32,
//     home: 'Ярославль',
//     profession: 'бухгалтер',
//     car: 'Ford'
//   },
//   {
//     n: undefined,
//     a: undefined,
//     h: undefined,
//     p: undefined,
//     c: undefined,
//     name: 'Никита',
//     age: 32,
//     home: 'Казань',
//     profession: 'логист',
//     car: 'Mercedes'
//   }
// ]
