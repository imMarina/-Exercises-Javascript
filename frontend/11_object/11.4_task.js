// Задача 11.4

// Допустим, что с бекенда приходят два массива объектов: `users` и `posts`. 
// Написать функцию, которая будет объединять эти массивы в один массив объектов. 
// При выполнении задачи исходные массивы самостоятельно дополнить 4-5 объектами.

// input

// users
let users = [
	{
		id: 101,
		name: "Юрий",
	},
	{
		id: 102,
		name: "Анна",
	},
	{
		id: 103,
		name: "Константин",
	},
]

// posts
let posts = [
	{
		id: 1,
		userID: 101,
		title: "Что не так с онлайн-курсами?",
		text: "Привет! Меня зовут Юрий, и сегодня я хочу поговорить об онлайн-курсах программирования."
	},
	{
		id: 2,
		userID: 101,
		title: "Что за черт, Javascript",
		text: "Этот пост — список забавных и хитрых примеров на JavaScript. Это отличный язык. У него простой синтаксис, большая экосистема и, что гораздо важнее, огромное сообщество."
	},
	{
		id: 3,
		userID: 103,
		title: "Работа с часовыми поясами в JavaScript",
		text: "Недавно я работал над задачей добавления часовых поясов в JS-библиотеку календаря, которую ведёт моя команда."
	},
]

// output
// [
//     {
//       id: 1,
//       name: 'Юрий',
//       userID: 101,
//       title: 'Что не так с онлайн-курсами?',
//       text: 'Привет! Меня зовут Юрий, и сегодня я хочу поговорить об онлайн-курсах программирования.'
//     },
//     {
//       id: 2,
//       name: 'Анна',
//       userID: 101,
//       title: 'Что за черт, Javascript',
//       text: 'Этот пост — список забавных и хитрых примеров на JavaScript. Это отличный язык. У него простой синтаксис, большая экосистема и, что гораздо важнее, огромное сообщество.'
//     },
//     {
//       id: 3,
//       name: 'Константин',
//       userID: 103,
//       title: 'Работа с часовыми поясами в JavaScript',
//       text: 'Недавно я работал над задачей добавления часовых поясов в JS-библиотеку календаря, которую ведёт моя команда.'
//     }
// ]


// example 1
// the spread operator
// Простое решение — использовать Оператор спреда чтобы расширить свойства указанных объектов до буквальных объектов (ES2018).

function mergeInfo(arrObj1, arrObj2) {
    let newArr = [];
    for (let i = 0; i < arrObj1.length; i++) {
        let newObj = {...arrObj1[i], ...arrObj2[i]};
        newArr.push(newObj);
    }
    return newArr;
}

console.log(mergeInfo(users, posts));

// example 2
// Object.assign()
// The Object.assign() метод копирует все свойства из одного или нескольких исходных объектов в целевой объект и возвращает целевой объект. Вы можете использовать это как:

function mergeInfo(arrObj1, arrObj2) {
    // by method map 
    let newArr = arrObj1.map((elem, index) => Object.assign(elem, arrObj2[index]));
    return newArr;
}

console.log(mergeInfo(users, posts));


// example 3
// merge info of objects with unique user id
// by methods MAP snd FIND and new object 
function mergeInfo(arrObj1, arrObj2) {

	let newArr = arrObj2.map((post) => {
	let newObj = {
		id: post.id,
		title: post.title,
		text: post.text,
		author: arrObj1.find(user => user.id === post.userID).name,
		};
	return newObj;
	});

	return newArr;
}

console.log(mergeInfo(users, posts));

// correct output
// [
// 	{
// 	  id: 1,
// 	  title: 'Что не так с онлайн-курсами?',
// 	  text: 'Привет! Меня зовут Юрий, и сегодня я хочу поговорить об онлайн-курсах программирования.',
// 	  author: 'Юрий'
// 	},
// 	{
// 	  id: 2,
// 	  title: 'Что за черт, Javascript',
// 	  text: 'Этот пост — список забавных и хитрых примеров на JavaScript. Это отличный язык. У него простой синтаксис, большая экосистема и, что гораздо важнее, огромное сообщество.',
// 	  author: 'Юрий'
// 	},
// 	{
// 	  id: 3,
// 	  title: 'Работа с часовыми поясами в JavaScript',
// 	  text: 'Недавно я работал над задачей добавления часовых поясов в JS-библиотеку календаря, которую ведёт моя команда.',
// 	  author: 'Константин'
// 	}
//   ]

