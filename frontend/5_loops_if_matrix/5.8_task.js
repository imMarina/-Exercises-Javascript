// Задание 8
// Дано n - размер матрицы. Выведете на экран шахматную доску:

let str = ''

for (let i = 0; i < 10; i++) {
    for (let k = 0; k < 10; ++k) {
        if ((i + k) % 2) {
        str = str + "0";
    }
    else {
        str = str + "1";
    }
    }
    str += '\n';
}

console.log(str);

/*
1 0 1 0 1 0 1 0 1 0
0 1 0 1 0 1 0 1 0 1
1 0 1 0 1 0 1 0 1 0
0 1 0 1 0 1 0 1 0 1
1 0 1 0 1 0 1 0 1 0
0 1 0 1 0 1 0 1 0 1
1 0 1 0 1 0 1 0 1 0
0 1 0 1 0 1 0 1 0 1
1 0 1 0 1 0 1 0 1 0
0 1 0 1 0 1 0 1 0 1
*/