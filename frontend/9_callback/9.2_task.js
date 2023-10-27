// Задача 9.2

// Используйте функцию `forEach` из предыдущей задача. Напишите callback-функцию, которая будет для каждого элемента числового массива рассчитывать сумму элемента с его индексом и выводить в консоль. Callback-функцию можно создавать стрелочным способом.

function forEach(array, callback) {
	for (let index = 0; index < array.length; index++) {
		let elem = array[index];
		let result = callback(elem, index);
		console.log(result);
	}
}

function myCallbackFunc(elem, index) {
    let sum = elem + index;
    let resultCallback = `${elem} + ${index} = ${sum}`;
    return resultCallback;
}

const arr = [1, 2, 3, 4, 5];
forEach(arr, myCallbackFunc);


// вариант с анонимной callback-функцией
forEach(arr, function(elem, index) {
    let sum = elem + index;
    let resultCallback = `${elem} + ${index} = ${sum}`;
    return resultCallback;
});

// forEach(arr, myCallbackFunc);


//  Callback-функция стрелочным способом
forEach(arr, (elem, index) => {
    let sum = elem + index;
    let resultCallback = `${elem} + ${index} = ${sum}`;
    return resultCallback;
});

// "1 + 0 = 1"
// "2 + 1 = 3"
// "3 + 2 = 5"
// "4 + 3 = 7"
// "5 + 4 = 9"
