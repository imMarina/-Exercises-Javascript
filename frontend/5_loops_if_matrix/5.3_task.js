// Задача 5.2
// Выведете матрицы как в предыдущем задании, но размер матрицы должен быть заранее задан переменной n (n строк, n столбцов).

// 1
let n = 6;

for (let i = 0; i < n; i++) {
	let str = ''
	for (let j = 0; j < n; j++) {
		  if (i < n/2) {
				str = str + "0";
	    } else {
		    str = str + "1";
	    }
	  }
	console.log(str);
}

/*
000000
000000
000000
111111
111111
111111
*/


// 2
let n2 = 6;

for (let i = 0; i < n2; i++) {
	let str = ''
	for (let k = 0; k < n2; k++) {
		  if (k < n2/2) {
				str = str + "1";
	    } else {
		    str = str + "0";
	    }
	  }
	console.log(str);
}

/*
111000
111000
111000
111000
111000
111000
*/

// 3 
let n3 = 6;

for (let i = 0; i < n3; i++) {
	let str = ''
	
	for (let k = 0; k < n3; k++) {
		  if ((k < n3/2 && i < n3/2) || (k > (n3/2-1) && i > (n3/2-1))) {
				str = str + "1";
	    } else {
		    str = str + "0";
	    }
	  }
	console.log(str);
}

/*
111000
111000
111000
000111
000111
000111
*/