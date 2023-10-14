// Задание 1 - Выведете матрицу 5x5:

for (let i = 0; i < 5; i++) {
	let str = ''
        for (let k = 0; k < 5; k++) {
            str = str + i + '/' + k + ' ';
        }
	console.log(str);
}


// Задание 2
// Используя два цикла (for) и одно ветвление (if/else) выведете матрицы 10x10. Подсказка: на каждом шаге цикла думайте какая сейчас строка и какой сейчас столбец и как исходя из этого можно понять выводить 0 или 1.

// 1
for (let i = 0; i < 10; i++) {
	let str = ''
	for (let j = 0; j < 10; j++) {
		  if (i < 5) {
				str = str + "0";
	    } else {
		    str = str + "1";
	    }
	  }
	console.log(str);
}
/*
0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0
1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1
*/


// 2
for (let i = 0; i < 10; i++) {
	let str = ''
	for (let k = 0; k < 10; k++) {
		  if (k < 5) {
				str = str + "1";
	    } else {
		    str = str + "0";
	    }
	  }
	console.log(str);
}

/*
1 1 1 1 1 0 0 0 0 0
1 1 1 1 1 0 0 0 0 0
1 1 1 1 1 0 0 0 0 0
1 1 1 1 1 0 0 0 0 0
1 1 1 1 1 0 0 0 0 0
1 1 1 1 1 0 0 0 0 0
1 1 1 1 1 0 0 0 0 0
1 1 1 1 1 0 0 0 0 0
1 1 1 1 1 0 0 0 0 0
1 1 1 1 1 0 0 0 0 0
*/

// 3 
for (let i = 0; i < 10; i++) {
	let str = ''
	
	for (let k = 0; k < 10; k++) {
		  if ((k < 5 && i < 5) || (k > 4 && i > 4)) {
				str = str + "1";
	    } else {
		    str = str + "0";
	    }
	  }
	console.log(str);
}



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


<script>
res.innerText="";
  
let n=10;
let matrix="";
let mean=n/2;
let row;
  
for(let i=0;i<n;++i){
  row="";
  for(let j=0;j<n;++j){
    if(i < j && (i+j) < n-1){
      	row+="1 ";
    } else{
      row+="0 ";
    }
  }
  matrix+=`<div>${row}</div>`;
}
  res.innerHTML+=matrix;

