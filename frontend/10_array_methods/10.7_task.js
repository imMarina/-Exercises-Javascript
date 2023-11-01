// Задача 10.7

// Напишите функцию, которая создаст массив из уникальных значений, которые есть в каждом из предоставленных массивов. Используйте примитивные типы данных.

const arr1 = [1, 2];
const arr2 = [2, 3];
const arr3 = ['a', 'b'];
const arr4 = ['b', 'c'];
const arr5 = ['b', 'e', 'c'];
const arr6 = ['b', 'b', 'e'];
const arr7 = ['b', 'c', 'e'];
const arr8 = ['b', 'e', 'c'];

console.log(intersection(arr1, arr2)); // [2]
console.log(intersection(arr3, arr4, arr5)); // ['b']
console.log(intersection(arr6, arr7, arr8)); // ['b', 'e']


function intersection(firstArr, secondArr) {
    
    let newArr = [];
    firstArr.forEach((item) => {
        if (secondArr.includes(item)) {
            newArr.push(item);
        }
    });
    return newArr;
}


// draft

for (let index1 = 0; index1 < firstArr.length; index1++) {
    for (let index2 = 0; index2 < secondArr.length; index2++) {
        for (let index3 = 0; index3 < thirdArr.length; index3++) {
            if (firstArr[index1] === firstArr[index1] 
        }
    }
}


    let newArr = [];
    arrays.filter((element) => {
        if (element === element) {
        newArr.push(element);
        }
    });
    return newArr;