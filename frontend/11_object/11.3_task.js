// Задача 11.3

// Допустим, что с бекенда приходит массив объектов, в которых одним из свойств является объект пользователей `user`. 
// Написать функцию, которая будет принимать данный массив и возвращать массив объектов `user`. 
// При выполнении задачи исходный массив самостоятельно дополнить 4-5 объектами.


// input
let arrFromBackend = [
    {
        id: 1,
        user: {
            id: 101,
            name: "Юрий",
            age: 28,
        },
        city: "Москва",
        role: "author",
    },
    {
        id: 2,
        user: {
            id: 102,
            name: "Юлия",
            age: 20,
        },
        city: "Санкт-Петербург",
        role: "reader",
    },
    {
        id: 3,
        user: {
            id: 103,
            name: "Олег",
            age: 18,
        },
        city: "Волгоград",
        role: "author",
    },
    {
        id: 4,
        user: {
            id: 104,
            name: "Оксана",
            age: 30,
        },
        city: "Сочи",
        role: "reader",
    },
    {
        id: 5,
        user: {
            id: 105,
            name: "Андрей",
            age: 35,
        },
        city: "Омск",
        role: "author",
    },
];


console.log(returnUsers(arrFromBackend));

function returnUsers(arrObj) {
    let users = arrFromBackend.map((elem) => elem.user);
    return users;
}


// output
// [
//     { id: 101, name: 'Юрий', age: 28 },
//     { id: 102, name: 'Юлия', age: 20 },
//     { id: 103, name: 'Олег', age: 18 },
//     { id: 104, name: 'Оксана', age: 30 },
//     { id: 105, name: 'Андрей', age: 35 }
// ]