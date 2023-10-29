// Задача 10.4

// Напишите функцию, которая убирает повторяющиеся элементы в массиве. 
// Постараться сохранить исходный порядок элементов в массиве.

const arr = [1, 2, 2, 3, 3, 4, 5, 6, 6];
const newArr = unique(arr);
console.log(newArr); // [ 1, 2, 3, 4, 5, 6 ]


function unique(array) {

    let newArr = [];
    
    array.forEach((item) => {
        if (!newArr.includes(item)) {
            newArr.push(item);
        }
    });
    return newArr;
}

