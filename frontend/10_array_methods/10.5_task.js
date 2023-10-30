// Задача 10.5

// Написать функцию, которая будет искать массив внутри двумерного массива и возвращать индекс найденного элемента, иначе возвращает `-1`.

// Двумерным массивом в JS является массив, элементами которого являются массивы. Например, `[[0, 0, 0], [1, 1, 1], [2, 2, 2]].`

const twoDimArray = [[0, 0, 0], [1, 1, 1], [2, 2, 3]];
const query1 = [1, 1, 1];
const result1 = indexOfArray(twoDimArray, query1);
console.log(result1); // 1

const query2 = [4, 4, 4];
const result2 = indexOfArray(twoDimArray, query2);
console.log(result2); // -1


function indexOfArray(twoDimArr, query) {
    
    for (let index = 0; index < twoDimArr.length; index++) {
        
        let twoDimArrString = twoDimArr[index].join();
        // console.log(twoDimArrString);
        let queryString = query.join();
        // console.log(queryString);
        
        if (twoDimArrString === queryString) {
                return index;
            } 
        
        // console.log(index);
        // console.log(twoDimArr[index]);
        // console.log(query);
    }
    return -1;
}


// need to find a solution by array.indexOf(element) or array.findIndex(callback)

function indexOfArray(array, element, from = 0) {
    
    for (let i = from; i < array.length; i++) {
        if (array[i] === element) {
            return i;
        } 
    }
    return -1;
    // return array.indexOf(element);
}