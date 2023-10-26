// Задание 7.9
// Дан массив `a`. Сформируйте новый массив `b`, в котором будут все элементы из массива `a`, но не будет повторений.
// Подсказка: с помощью метода `includes` можно проверить положили ли вы уже такой элемент в новый массив.

let arr = [1, 4, 10, 10, 4, 2, 10, 0];
// console.log(arr.length); // 8
let newArr = [];

// method foreach
arr.forEach((item) => {
    if (!arr.includes(item)) {
        arr.push(item);
    }
});
console.log(arr); // [1,4,10,2,0]


// 2 example

for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] !== arr[i + 1]) {
            
          	let newItem = arr[i];
          	
            newArr.push(newItem);
            
            arr[i] = arr[i + 1];
            
            arr[i + 1] = newItem;
        }
    }


console.log(newArr); // [1,4,10,2,0] 