// Задача 9.2

// Используйте функцию `forEach` из предыдущей задача. Напишите callback-функцию, которая будет для каждого элемента числового массива рассчитывать сумму элемента с его индексом и выводить в консоль. Callback-функцию можно создавать стрелочным способом.

const arr = [1, 2, 3, 4, 5];

function forEach(array, myCallbackFunc) {
	for (let i = 0; i < array.length; i++) {
		let item = array[i];
	    let index = i;
		myCallbackFunc(item, index);
	}
}

forEach(arr, function(elem, index) {
    let sum = elem + index;
    let result = `${elem} + ${index} = ${sum}`
    console.log(result);
});

// forEach(arr, myCallbackFunc);


// вариант с анономной callback-функцией,
// созданной стрелочным способом (см. тему "Функции")
forEach(arr, (elem, index) => {
    let sum = elem + index;
    let result = `${elem} + ${index} = ${sum}`
    console.log(result);
});

// "1 + 0 = 1"
// "2 + 1 = 3"
// "3 + 2 = 5"
// "4 + 3 = 7"
// "5 + 4 = 9"
