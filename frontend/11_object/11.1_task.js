// Задача 11.1

// Даны два массива, в первом перечислены по порядку названия фильмов, во втором - режиссёры этих фильмов. 
// Написать функцию, которая будет принимать эти два массива, возвращать массив объектов со свойствами: название фильма и режиссёр.

// input
const movieTitles = ["Зеленая миля", "Побег из Шоушенка", "Форрест Гамп", "1+1", "Список Шиндлера"];
const movieDirectors = ["Фрэнк Дарабонт", "Фрэнк Дарабонт","Роберт Земекис", "Оливье Накаш", "Стивен Спилберг"];

// output
[
    {title: "Зеленая миля", director: "Фрэнк Дарабонт"},
    {title: "Побег из Шоушенка", director: "Фрэнк Дарабонт"},
    {title: "Форрест Гамп", director: "Роберт Земекис"},
    {title: "1+1", director: "Оливье Накаш"},
    {title: "Список Шиндлера", director: "Стивен Спилберг"},
]

function createNewObjects(title, director) {
    return {
        title,
        director,
    };
}

function makeList(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        let result = createNewObjects(arr1[i], arr2[i]);
        newArr.push(result);
    }
    return newArr;
}

console.log(makeList(movieTitles, movieDirectors));


// by method map

let newArr = movieTitles.map((elem, index) => {
    let newElem = {};
    
    newElem.title = elem;
    newElem.director = movieDirectors[index];

    return newElem;
});

console.log(newArr);
