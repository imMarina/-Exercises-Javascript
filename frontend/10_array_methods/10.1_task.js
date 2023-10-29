// Задача 10.1
// Даны два массива. Написать функцию, которая будет из первого массива удалять все значения второго, 
// возвращая новый массив. Порядок оставшихся элементов должен сохраняться.


function arrayDiff(firstArr, secondArr) {
    
    let newArr = [];
    
    firstArr.forEach((item) => {
        if (!secondArr.includes(item)) {
            newArr.push(item);
        }
    });
    
    return newArr;
}

const arr = arrayDiff([1, 2], [1]);
console.log(arr); // [2]

const arr2 = arrayDiff([1, 2, 2, 4, 4, 3], [2, 4]);
console.log(arr2); // [1, 3]



// новый массив без повторений

function arrayDiff(firstArr, secondArr) {
    const merged = firstArr.concat(secondArr);
    let newArr = [];
    merged.forEach((item) => {
        if (!newArr.includes(item)) {
            newArr.push(item);
        }
    });
    return newArr;
}