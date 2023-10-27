// Задание 7.10
// Дан массив `a`. Определите длину самой длинной возрастающей последовательности в массиве.


let arr = [1, 5, 6, 0, 1, 2, 1, 1, 7, 10, 11, 0];
let count = 0;
let length = count;


for (let i = 0; i < arr.length; i++) {

    if (arr[i + 1] && arr[i + 1] > arr[i]) {
        count++;
    } else {
        count = 0;
    }
    
    if (count >= length && count !== 0) {
        length = count + 1;
    }
}

console.log(length);
