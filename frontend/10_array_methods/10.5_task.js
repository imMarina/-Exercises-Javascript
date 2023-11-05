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

// by array.join()
function indexOfArray(twoDimArr, query) {
    
    for (let index = 0; index < twoDimArr.length; index++) {
        
        let twoDimArrString = twoDimArr[index].join();
        let queryString = query.join();
        
        if (twoDimArrString === queryString) {
                return index;
            } 
    }
    return -1;
}


// by array.findIndex(callback)
function indexOfArray(twoDimArr, query) {

  let result = twoDimArr.findIndex((interArr) => {
        let interArrString = interArr.join();
        let queryString = query.join();
        return interArrString === queryString;
    });
  
    return result;
}


// by callback function() (updated solution with Sasha) 
function indexOfArray(twoDimArr, query) {

    // task 10.2 compare arrays
    let isEqual= (firstArr, secondArr) =>
    (firstArr.length === secondArr.length) && firstArr.every((element,index) => element === secondArr[index]);
    
    for (let index = 0; index < twoDimArr.length; index++) {
        if (isEqual(twoDimArr[index], query)) {
                return index;
        } 
        
    }
    return -1;
}