// Задача 10.2
// Напишите функцию, которая сравнивает два массива, если они равны, вернуть true, иначе false.

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
console.log(isEqual(arr1, arr2)); // true


function isEqual(firstArr, secondArr) {
    return firstArr.length === secondArr.length && firstArr.every((element,index) => element === secondArr[index]);
}