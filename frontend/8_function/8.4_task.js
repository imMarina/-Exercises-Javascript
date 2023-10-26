// Задача 8.4
// Написать функцию, которая будет получать неотрицательное число, например 3, и возвращать строку `"1 sheep...2 sheep...3 sheep..."`. Проверять полученное число не нужно, оно всегда неотрицательное целое.

function iWantToSleep(counter) {
    let text = 'sheep...'
    let result = '';
    
    for (let i = 1; i <= counter; i++) {
        result += `${i} ${text}`
    }
    return result;
}

  console.log(iWantToSleep(3)); // 1 sheep...2 sheep...3 sheep...
  console.log(iWantToSleep(5)); // 1 sheep...2 sheep...3 sheep...4 sheep...5 sheep...