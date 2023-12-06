// Задача 11.5
// Дан массив объектов. Вывести в консоль все эти объекты.

const movies = [
	{title: "Зеленая миля", director: "Фрэнк Дарабонт"},
	{title: "Побег из Шоушенка", director: "Фрэнк Дарабонт"},
	{title: "Форрест Гамп", director: "Роберт Земекис"},
	{title: "1+1", director: "Оливье Накаш"},
	{title: "Список Шиндлера", director: "Стивен Спилберг"},
];

//output
// '{title: "Зеленая миля", director: "Фрэнк Дарабонт"}'
// '{title: "Побег из Шоушенка", director: "Фрэнк Дарабонт"}'
// '{title: "Форрест Гамп", director: "Роберт Земекис"}'
// '{title: "1+1", director: "Оливье Накаш"}'
// '{title: "Список Шиндлера", director: "Стивен Спилберг"}'


// solution 1
movies.forEach(({title, director}) => {
    console.log(`'{title: "${title}", director: "${director}"}'`)
});


// solution 2
movies.forEach((obj) => {
    console.log(`${JSON.stringify(obj)}`);
});
// output
// {"title":"Зеленая миля","director":"Фрэнк Дарабонт"}
// {"title":"Побег из Шоушенка","director":"Фрэнк Дарабонт"}
// {"title":"Форрест Гамп","director":"Роберт Земекис"}
// {"title":"1+1","director":"Оливье Накаш"}
// {"title":"Список Шиндлера","director":"Стивен Спилберг"}

