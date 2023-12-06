// Задача 11.8
// Дан массив объектов. Отфильтровать его от элементов, у которых нет свойства `phone`.

const users = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        phone: "1-770-736-8031",
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        phone: "010-692-6593",
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
    },
    {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        phone: "493-170-9623",
    },
    {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
    },
    {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
        phone: "1-477-935-8478",
    },
    {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
    },
    {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
        phone: "586-493-6943",
    },
    {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
        phone: "775-976-6794",
    },
    {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
    }
];

//output
//   [
//     {
//       id: 1,
//       name: 'Leanne Graham',
//       username: 'Bret',
//       email: 'Sincere@april.biz',
//       phone: '1-770-736-8031'
//     },
//     {
//       id: 2,
//       name: 'Ervin Howell',
//       username: 'Antonette',
//       email: 'Shanna@melissa.tv',
//       phone: '010-692-6593'
//     },
//     {
//       id: 4,
//       name: 'Patricia Lebsack',
//       username: 'Karianne',
//       email: 'Julianne.OConner@kory.org',
//       phone: '493-170-9623'
//     },
//     {
//       id: 6,
//       name: 'Mrs. Dennis Schulist',
//       username: 'Leopoldo_Corkery',
//       email: 'Karley_Dach@jasper.info',
//       phone: '1-477-935-8478'
//     },
//     {
//       id: 8,
//       name: 'Nicholas Runolfsdottir V',
//       username: 'Maxime_Nienow',
//       email: 'Sherwood@rosamond.me',
//       phone: '586-493-6943'
//     },
//     {
//       id: 9,
//       name: 'Glenna Reichert',
//       username: 'Delphine',
//       email: 'Chaim_McDermott@dana.io',
//       phone: '775-976-6794'
//     }
//   ]


const result = users.filter( (obj) => obj.phone);
console.log(result);