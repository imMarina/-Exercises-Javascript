// Задача 10.3

// Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки (””), ноль (0), null.


const arr = [1, false, "42", "", null, 67, undefined, -45, 0, "apple"];
const newArr = withoutEmpty(arr);
console.log(newArr); // [1, "42", 67, -45, "apple"]

function withoutEmpty(array) {
    
    const result = array.filter((element) => element);
    
    return result;
}

// Логическое – Происходит в логических операциях. Может быть вызвано с помощью Boolean(value). Подчиняется правилам:
// Значения - 0, null, undefined, NaN, ""	=>  Становятся - false