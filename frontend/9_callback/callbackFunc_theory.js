// example

// функция высшего порядка
function func(param1, param2, callbackFunc) {
    let num1 = 2 + param1;
    let num2 = 3 + param2;

    // return callback function mozhno zapisat v peremennuyu. 
    // esli ne bilo return, to v peremennoi budet undefinded tk function nihego ne vozvrawaet 
    let result = callbackFunc(num1, num2);
    
    console.log(result);

    return result;
}

// callback-функция
function showConsole(num1, num2) {
    let result = `num1 ${num1}, num2 ${num2}`;
    console.log(result);
    return result;
}

function sum(num1, num2) {
    let sum = num1 + num2;
    //console.log(`sum ${sum}`);
    return sum;
}


func(1, 2, (num1, num2) => {
    let sum = num1 + num2;
    console.log(`sum ${sum}`);
});

func(1, 2, sum);
func(1, 2, showConsole);