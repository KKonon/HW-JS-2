
/*Задание 3*/
let numStr = '123123';

let sum1 = +numStr[0] + +numStr[1] + +numStr[2];
let sum2 = +numStr[3] + +numStr[4] + +numStr[5];

console.log(sum1 == sum2 ? "Yes" : "No");

/* Задание 8*/

let day = 30;

let result="";

/*if (day > 0 && day <= 10){
    result="Первая декада";
} else if (day > 10 && day <= 20){
    result="Вторая декада";
} else if (day > 20 && day <= 31 ) {
    result="Третья декада";
} else if (day > 31){
    result="Неверная декада";
}*/


switch (true){
    case(day > 0 && day <=10):
        result="Первая декада";
    break;
    case(day > 10 && day <= 20):
        result="Вторая декада";
    break;
    case(day > 20 && day <= 31):
        result="Третья декада";
    break;
}

console.log(result);


/*Задание 9*/
let days = 250;
let years = Math.ceil(days / 365);
let month = Math.ceil(days / 31);
let weeks = Math.ceil(days / 7);
let hours = Math.ceil(days * 24);
let mins = Math.ceil(hours * 60);
let seconds = mins * 60;

console.log(`
Days: ${days}, 
years: ${years}, 
month: ${month}, 
weeks: ${weeks}, 
hours: ${hours}, 
mins: ${mins}, 
seconds: ${seconds}`);


if (days < 365) console.log("Меньше года");
if (month < 1) console.log("Меньше месяца");
if (weeks < 1) console.log("Меньше недели");