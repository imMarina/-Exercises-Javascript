IsEqual. Напишите функцию, которая поверхностно сравнивает два объекта.
/**
  * Описание задачи: Напишите функцию, которая поверхностно сравнивает два объекта.
  * Ожидаемый результат: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
  * Сложность задачи: 2 of 5
  * @param {Object<string | number>} firstObj - объект с примитивами
  * @param {Object<string | number>} secondObj - объект с примитивами
  * @returns {boolean}
*/

export const isEqual = (firstObject, secondObject) => {
  throw new Error(`Напишите здесь свое решение ${firstObject} ${secondObject}`);
};

const data = { a: 1, b: 1 };
const data2 = { a: 1, b: 1 };
const data3 = { a: 1, b: 2 };
console.log(isEqual(data, data2)); // true
console.log(isEqual(data, data3)); // false


// draft, my solution, the first one
// function isEqual(obj1, obj2) {
    
//     let arr1 = Object.entries(obj1);
//     let arr2 = Object.entries(obj2);
    
//     let result = arr1.every( (arr, i) => arr.every( (elem, j) => (elem === arr2[i][j]) ) );
//     // console.log(result);
    
//     if (arr1.length === arr2.length) {
//         return result;
//     } else {
//         return false;
//     }
// }

// solution 1 - by Object.entries(obj)

function isEqual(obj1, obj2) {
  let arr1 = Object.entries(obj1);
  let arr2 = Object.entries(obj2);

  if (arr1.length !== arr2.length) {
    return false;
  }
  

  // option 1
  // return arr1.every((arr, i) => arr[0] === arr2[i][0] && arr[1] === arr2[i][1]);

  // option 2
  // return arr1.every(([key, value], i) => key === arr2[i][0] && value === arr2[i][1]);

  // option 3
  return arr1.every(([key1, value1], i) => {
            let key2 = arr2[i][0];
            let value2 = arr2[i][1];
            return key1 === key2 && value1 === value2;
  });
}



// solution 2 - by Object.keys(obj)

const isEqual = (firstObj, secondObj) => {

    const firstObjKeys = Object.keys(firstObj);
    const secondObjKeys = Object.keys(secondObj);

    if (firstObjKeys.length !== secondObjKeys.length) {
      return false;
    }

    return firstObjKeys.every((key) => firstObj[key] === secondObj[key]);
};
