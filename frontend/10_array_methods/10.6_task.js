// Задача 10.6

// Напишите функцию, которая разделяет массив на части заданного размера.

const arr = [1, 2, 3, 4, 5];
console.log(chunk(arr, 2)); // [[1, 2], [3, 4], [5]]
console.log(chunk(arr, 3)); // [[1, 2, 3], [4, 5]]

function chunk(mainArr, lengthOfInterArr) {

    let twoDimArr = [];
    let index = 0;
    for (; index < mainArr.length; index += lengthOfInterArr) {

        let separator = index + lengthOfInterArr;
        let interArr = mainArr.slice(index, separator);
        // console.log(interArr);
        twoDimArr.push(interArr);
    }
    return twoDimArr;
}


// draft
// let separator = lengthOfInterArr + 1;
    // let mainArrString = mainArr.join().slice(index, separator).split(',');
    //console.log(mainArrString);
    // parseInt('string')
            
        // index = 2
        // console.log(mainArr[index], mainArr[index + 1]);
        // console.log(mainArr[index + 1]);

        //mainArr.length = lengthOfInterArr;