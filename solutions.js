// define 3 vars = string, boolean, nr
let userName = "name";
let reply = true;
let age = 26; 

/*5 diffr comparisons betw 2 vals that produce boolean result;
then add comment that gives result & explains answer. 
use at least 3 diffr comparison operators
incl one using strict equality operator (===)
*/

6 > 2; //true; 6 is larger than 2
"pineapple" < "apple" //false; 'a' smaller than 'p' dictionary order wise
undefined === null //false; strict comparison, diffr types on each side
null == undefined //true; values are same
4 != 7 //true; 4 doesnt equal 7

/* output "5 * 4 = 20" by calc answer and using template
literal for result
*/

let a = 5;
let b = 4;
console.log (`5 * 4 = ${a * b}`);
//side note we want `` not ''

/* 2 diffr ways to convert nr -> string*/
let value = 15;
value = String(value);

value = value.toString();

/* boolean expression that uses all three 
logical operators (AND, OR, NOT). */


let isAdult = true;
let hasTicket = false;
let withParent = true;

let accessGranted = (isAdult && hasTicket) || (isAdult && !hasTicket && withParent);

console.log(accessGranted); 

/* function that takes single nr as parameter and returns boolean
depending on if input is + or - */

function checkPositive(n) {
    return n > 0;
}

console.log(checkPositive(-3));

/* write 2 loops, a 'for' and a 'while' which each 
output nrs 1 thru 10 inclusive */

//for loop
let i = 1;

for(i = 1; i <= 10; i++) {
    alert(i);
}

//while loop
i = 1;
while (i < 11) {
  alert(i);
  i++;
}

/*ask user for nr then using single if, output msg
if input is either 5, 13 or divisible by 3 */

    let inputNr = prompt("Enter any number", '');
    n = Number(inputNr);


    if(n === 5 || n === 13 || n % 3 === 0) {
    alert("your number is either 5, 13 or divisible by 3");
    }

/*Prompt for fav season. Use chained if...else if 
to output diffr msg depending on input. 
Now write alt way to solve using switch instead. */
let favSeason = prompt("What's your fav season?", "");

if(favSeason == "summer") {
    alert("sun's out!");
} else if(favSeason == "autumn") {
    alert("crunchy leaves time");
} else if(favSeason == "winter") {
    alert("the cozy indoor season");
} else if(favSeason == "spring") {
    alert("the season in full bloom");
}


let favoritSeason = prompt("What season do you prefer?", "");

switch (favoritSeason) {
    case "summer":
        alert("Sun's Out!!");
    case "autumn":
        alert("Crunchy leaf time");
    case "winter":
        alert("cozy time indoors");
    case "spring":
        alert("a blooming good time");
}


