// Задача 9.3 (аналог метода map)

// Примечание: Метод `map()` создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.

/* Напишите функцию `map`,  которая принимает первым параметром массив, вторым - callback-функцию. Функция `map` должна создавать новый массив и возвращать его. сallback-функцию должна применяться к каждому элементу исходного массива и принимает два параметра: сам элемент и индекс, а также возвращать элемент нового массива (`const newElem = callback(array[index], index)`). Созданный новый элемент должен записываться в новый массив.
- Передайте в созданную функцию `map` числовой массив, а в качестве callback-функции - функцию, которая будет высчитывать квадрат каждого элемента и возвращать его. Callback-функцию можно создавать стрелочным способом. */

const arr = [2, 3, 4, 5];
// const newArr = map(arr, myCallbackFunc);
// console.log(newArray); // [4, 9, 16, 25];

function map(array, myCallbackFunc) {
    let newArray = [];
	for (let i = 0; i < array.length; i++) {
        const newElem = myCallbackFunc(array[i])
        newArray.push(newElem);
	}
    return newArray;
}

map(arr, function(elem) {
    let result = elem ** 2;
    console.log(result);
});


// стрелочный способ
map(arr, elem => {
    let result = elem ** 2;
    console.log(result);
});