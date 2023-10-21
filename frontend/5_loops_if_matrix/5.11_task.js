// 5.11

/*
0 1 1 1 1 1 1 1 1 0
4 0 1 1 1 1 1 1 0 2
4 4 0 1 1 1 1 0 2 2
4 4 4 0 1 1 0 2 2 2
4 4 4 4 0 0 2 2 2 2
4 4 4 4 0 0 2 2 2 2
4 4 4 0 3 3 0 2 2 2
4 4 0 3 3 3 3 0 2 2
4 0 3 3 3 3 3 3 0 2
0 3 3 3 3 3 3 3 3 0
*/

let n = 10;
let flag = n - 1;

for (let i = 0; i < n; i++) {
    let str = "";
    
    for (let j = 0; j < n; j++) {

        if (i < j && (i+j) < flag) {
        str += "1 ";
        } 
        else if (i > j && (i+j) > flag) {
        str += "3 ";
        } 
        else if (i > j && (i < flag - j)) {
        str += "4 ";
        } 
        else if ((i === j) || (j === flag - i)) {
        str = str + '0 ';
        }
        else {
        str += "2 ";
        }
    }
    console.log(str);
}

/*
0 1 1 1 1 1 1 1 1 0 
4 0 1 1 1 1 1 1 0 2 
4 4 0 1 1 1 1 0 2 2 
4 4 4 0 1 1 0 2 2 2 
4 4 4 4 0 0 2 2 2 2 
4 4 4 4 0 0 2 2 2 2 
4 4 4 0 3 3 0 2 2 2 
4 4 0 3 3 3 3 0 2 2 
4 0 3 3 3 3 3 3 0 2 
0 3 3 3 3 3 3 3 3 0 
*/


// by Evgeniya (frontend2)

let n = 10;

for (let i = 0; i < n; i++){
    let str = '';

    for (let j = 0; j < n; j++) {
        if ((i === j) || (j === n - i - 1)) {
            str = str + '0 ';
        } else if (j >= i && i < n - j) {
            str = str + '1 ';
        } else if(i >= j && i < n - j) {
            str = str + '4 ';
        } else if (i >= j && j > i - n) {
            str = str + '3 ';
        } else {
            str = str + '2 ';
        }
    }
    console.log(str);
} 
