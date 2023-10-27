// Задача 9.3 (аналог метода map)

// Примечание: Метод `map()` создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.

/* Напишите функцию `map`,  которая принимает первым параметром массив, вторым - callback-функцию. Функция `map` должна создавать новый массив и возвращать его. сallback-функцию должна применяться к каждому элементу исходного массива и принимает два параметра: сам элемент и индекс, а также возвращать элемент нового массива (`const newElem = callback(array[index], index)`). Созданный новый элемент должен записываться в новый массив.
- Передайте в созданную функцию `map` числовой массив, а в качестве callback-функции - функцию, которая будет высчитывать квадрат каждого элемента и возвращать его. Callback-функцию можно создавать стрелочным способом. */


function map(array, callback) {
    let newArray = [];

	for (let index = 0; index < array.length; index++) {
        let elem = array[index];
        const newElem = callback(elem, index) // mozhno peredavat stolko elem skolko potrebuetsya, t e mozhno peredat v dannom sluhae tolko odin elem, a index ne peredavat
        newArray.push(newElem);
	}

    return newArray;
}

function myCallback(elem) {
    let result = elem ** 2;
    return result;
}

const arr = [2, 3, 4, 5];
const newArr = map(arr, myCallback);
console.log(newArr); // [4, 9, 16, 25];


// вариант с анонимной callback-функцией
const newArr = map(arr, function(elem) {
   return elem ** 2;
});


//  Callback-функция стрелочным способом
const newArr = map(arr, elem => elem ** 2);

