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

