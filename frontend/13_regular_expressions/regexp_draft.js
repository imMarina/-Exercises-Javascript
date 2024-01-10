// notes

// abc          – Соответствует последовательно идущим abc
// [abc]        – Соответствует или a, или b, или c
// [d-j]        – Соответствует одной из букв из диапазона d - j
// [3-8]        – Соответствует одной из цифр из диапазона 3-8
// [B-Fd-j3-8]  – Соответствует одной из букв из обоих диапазонов или одной из цифр из диапазона 3 - 8
// a|b          – Соответствует либо букве a, либо букве b
// [^d-j]       – Данный символ, стоящий в начале этих скобок, означает отрицание. Соответствует одной из букв НЕ из диапазона d - j
// .            – Соответствует одному любому символу. Исключение: символ новой строки
// ^выражение   – Соответствует выражению в начале строки
// выражение$   – Соответствует выражению в конце строки


// Task 1
// Напишите регулярное выражение, которое находит все 10 совпадений с шаблонами had и Had в этом отрывке непереводимой игры слов на местном диалекте:

let str1 = 'Jim, where Bill had had "had", had had "had had". "Had had" had been correct.';
let result1 = str1.match(/had/gmi);
// let result1 = str1.match(/[Hh]ad/gm);
console.log(result1); // ['had', 'had', 'had', 'had', 'had', 'had', 'had', 'Had', 'had', 'had']
console.log(result1.length); // 10


// Task 2
// А как насчет всех названий животных в следующем предложении?

let str2 = 'A bat, a cat, and a rat walked into a bar...';
let result2 = str2.match(/[bcr]at/gmi);
console.log(result2); // [ 'bat', 'cat', 'rat' ]
console.log(result2.length); // 3


// Task 3
// Или еще проще: найдите слова bar или bat:

let str3 = 'A bat, a cat, and a rat walked into a bar...';
let result3 = str3.match(/ba[rt]/gm);
console.log(result3); // [ 'bat', 'bar' ]
console.log(result3.length); // 2


// Task 4
// Попробуйте написать регулярное выражение для поиска... регулярного выражения \[\]

let str4 = '...match this regex `\[\]` with a regex?';
let result4 = str4.match(/\\\[\\\]/gm);
console.log(result4); // null ???


// Task 5
// Попробуйте написать регулярное выражение для поиска... регулярного выражения

let str5 = ' `\r`, `\t`, and `\n` are all regex escape sequences.';
let result5 = str5.match(/\\[rtn]/gm);
console.log(result5); // null ???


// Task 6
// Example: И, как и со всеми специальными символами, если вы хотите сопоставить литерал., то вам нужно поставить перед ним символ \:

let str6 = `Hi Walmart is my grandson there his name is \n \r \t.`;
let result6 = str6.match(/\\./gm);
console.log(result6); // null


// Task 7

let str7 = `War is Peace. Freedom is Slavery. Ignorance is Strength.`;
let result7 = str7.match(/\./gm);
console.log(result7); // [ '.', '.', '.' ]
console.log(result7.length); // 3


// note 
// `\n`, `\r`, and `\t` are whitespace characters, `\.`, `\\` and `\[` are not.
// Пробел " " - это пробел, разрыв строки или табуляция.


// Task 8
// Шестнадцатеричные числа могут содержать цифры 0-9, а также буквы A-F. 
// Создайте регулярное выражение, чтобы найти действительные шестнадцатеричные коды в списке ниже:

let str8 = `1H8 4E2 8FF 0P1 T8B 776 42B G12`;
let result8 = str8.match(/[4-8][2-7E-F][2-6B-F]/gm);
// pattern: [0-9A-F][0-9A-F][0-9A-F]
console.log(result8); // [ '4E2', '8FF', '776', '42B' ]
console.log(result8.length); // 4


// Task 9
// Используя диапазоны символов, создайте регулярное выражение, которое будет выбирать только строчные согласные (не гласные буквы, включая y) в предложении ниже:

let str9 = `The walls in the mall are totally, totally tall.`;
let result9 = str9.match(/[b-df-hj-np-tv-z]/gm);
console.log(result9); // ['h', 'w', 'l', 'l', 's', 'n', 't', 'h', 'm', 'l', 'l', 'r', 't', 't', 'l', 'l', 'y', 't', 't', 'l', 'l', 'y', 't', 'l', 'l']
console.log(result9.length); // 25

// Знак "not" ^ 
// pattern: [^aeiou]
// Знак "not" ^ как крайний левый символ в квадратных скобках [] указывает механизму регулярных выражений на совпадение с одним (любым) символом, которого нет в квадратных скобках. Это означает, что приведенное выше регулярное выражение также соответствует всем пробелам, точке ., запятой , и заглавной T в начале предложения. Чтобы исключить их, мы можем точно также поместить их в квадратные скобки:
// pattern: [^aeiou .,T] 


// Task 10
// Напишите регулярное выражение, используя диапазон и знак "not" ^, чтобы найти все годы между 1977 и 1982 (включительно):

let str10 = `1975 1976 1977 1978 1979 1980 1981 1982 1983 1984`;
let result10 = str10.match(/19[78][^3-6]/gm); 
console.log(result10); // [ '1977', '1978', '1979', '1980', '1981', '1982' ]
console.log(result10.length); // 6


// Task 11
// Напишите регулярное выражение для поиска всех символов, которые не являются символом знака "not" ^ :

let str11 = `1975 1976 1977 1978 1979 1980 1981 1982 1983 1984`;
let result11 = str11.match(/19[78][^3-6]/gm); 
console.log(result11); // [ '1977', '1978', '1979', '1980', '1981', '1982' ]
console.log(result11.length); // 6


// Task 12
// Напишите регулярное выражение для поиска всех символов, которые не являются символом знака "not" ^ :

let str12 = `abc1^23*()`;
let result12 = str12.match(/[^\^]/gm);
// pattern: [^^]
console.log(result12); // ['a', 'b', 'c', '1', '2', '3', '*', '(', ')']
console.log(result12.length); // 9


// note
// Классы символов работают почти как диапазоны, но при этом, вы не можете указать значения 'start' и 'end':
// класс	символы
// \d	    "цифры" [0-9]
// \w	    "символы слова" [A-Za-z0-9_]
// \s	    "пробелы" [ \t\r\n\f]

// pattern: \\[a-z]
// pattern: \\\w
// string:  `\n`, `\r`, `\t`, and `\f` are whitespace characters, `\.`, `\\` and `\[` are not.


// Task 13
// Как мы с вами знаем, в Java идентификатор (имя переменной, класса, функции и т.д.) может начинаться только с буквы a-zA-Z, знака доллара $ или подчеркивания _. (подчеркивание, конечно плохой стиль, но компилятор пропускает, прим. переводчика). 
// Остальная часть символов должна быть символами "word" \w. Используя один или несколько классов символов, создайте регулярное выражение для поиска допустимых идентификаторов Java среди следующих трехсимвольных последовательностей:

let str13 = `__e $12 .x2 foo Bar 3mm`;
let result13 = str13.match(/[a-zA-Z$_]\w\w/gm);
console.log(result13); // [ '__e', '$12', 'foo', 'Bar' ]


// Task 14
// Номера социального страхования США (SSN) представляют собой 9-значные номера в формате XXX-XX-XXXX, где каждый X может быть любой цифрой [0-9]. 
// Используя один или несколько классов символов, напишите регулярное выражение, чтобы найти правильно отформатированные номера SSN в списке ниже:

let str14 = `113-25=1902 182-82-0192 H23-_3-9982 1I1-O0-E38B`;
let result14 = str14.match(/[0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9][0-9][0-9]/gm);
// pattern: \d\d\d-\d\d-\d\d\d\d
console.log(result14); // [ '182-82-0192' ]


// Task 15 - 16 - 17

// notes 
// Звезда Клини (или "звездочка") * укажет, что нужно искать соответствия предыдущему токену любое количество раз, включая ноль раз. Знак "плюс" + укажет, что нужно искать один или несколько раз. 
// Таким образом, выражение, которое предшествует +, является обязательным (по крайней мере, один раз), в то время как выражение, которое предшествует *, является необязательным, но когда оно появляется, оно может появляться любое количество раз.

let str15 = `__e $123 3.2 fo Barr a23mm ab x`;
let result15 = str15.match(/[a-zA-Z_$]\w*/gm);
console.log(result15); // ['__e', '$123', 'fo', 'Barr', 'a23mm', 'ab', 'x]

// Но что-бы произошло, если бы мы в примере выше использовали + вместо *?
let str16 = `__e $123 3.2 fo Barr a23mm ab x`;
let result16 = str15.match(/[a-zA-Z_$]\w+/gm);
console.log(result16); // ['__e', '$123', 'fo', 'Barr', 'a23mm', 'ab']


// Когда мы можем использовать +? Когда нам нужно найти хотя бы одно совпадение, но не важно, сколько раз должно совпасть данное выражение. Например, если мы хотим найти любые числа, содержащие десятичную точку:

let str17 = `0.011 .2 42 2.0 3.33 4.000 5 6 7.89012`;
let result17 = str17.match(/\d*\.\d+/gm);
console.log(result17); // [ '0.011', '.2', '2.0', '3.33', '4.000', '7.89012' ]


// Task 18
// Найдите все английские слова в отрывке ниже.

let str18 = `3 plus 3 is six but 4 plus three is 7`;
let result18 = str18.match(/[a-z]+/gm); // why * doesnt work???
console.log(result18); // ['plus', 'is', 'six',  'but', 'plus', 'three', 'is']


// Task 20
// Найдите все обозначения размеров файлов в списке ниже. Размеры файлов будут состоять из числа (с десятичной точкой или без нее), за которым следуют KB, MB, GB или TB:

let str20 = `11TB 13 14.4MB 22HB 9.9GB TB 0KB`;
let result20 = str20.match(/\d[\.\d]*[KMGT][B]+/gm);
// pattern: \d+\.*\d*[KMGT]B
console.log(result20); // [ '11TB', '14.4MB', '9.9GB', '0KB' ]


// note
// "optional" ? это модификатор, который соответствует нулю или одному из предыдущих символов, но не более:
// pattern: \d+\.?\d*[KMGT]B
// string:  1..3KB 5...GB ..6TB
// matches:    ^^^          ^^^ 



// Task 21
// В некоторых языках программирования (например, Java) за некоторыми целыми числами и числами с плавающей запятой (точкой) могут следовать l / L и f / F, чтобы указать, что они должны рассматриваться как long / float (соответственно), а не как обычные int / double. 
// Найдите все действительные "long" числа в строке ниже:

let str21 = `13L long 2l 19 L lL 0`;
let result21 = str21.match(/\d+\.?[lf]?/gmi);
// pattern: \d+[lL]?
console.log(result21); // [ '13L', '2l', '19', '0' ]


// Task 22

let str22 = `13L long 2l 19 L lL 0`;
let result22 = str22.match(/\d+\.?[lf]?/gmi);
// pattern: \d+[lL]?
console.log(result22); // [ '13L', '2l', '19', '0' ]