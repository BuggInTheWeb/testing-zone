// [3] 1. Define three variables using `let`, assigning them to a string, a
// boolean, and a number respectively.

let myString = "hello";
let myBoolean = true;
let myNumber = 42;

// [10] 2. Write five different comparisons between two values that produce a
// boolean result, and then add a comment that gives the result and explains
// your answer (e.g., `5 > 3 // true; 5 is greater than 3`). You must use at
// least three different comparison operators, and include at least one
// comparison using the strict equality operator (`===`).

10 > 5; // true; 10 is greater than 5
3 < 8; // true; 3 is less than 8
7 === 7; // true; 7 is strictly equal to 7
4 !== 9; // true; 4 is not equal to 9
6 >= 6; // true; 6 is greater than or equal to 6

// [2] 3. Output the equation `"5 * 4 = 20"` by calculating the answer (`20`)
// and using a template literal for the result.

console.log(`5 * 4 = ${5 * 4}`);

// [2] 4. Provide two different ways of converting a number to a string.
String(123);
`${123}`;

// [3] 5. Write a boolean expression that uses all three of the logical
// operators (AND, OR, NOT).
(true && false) || !false;

// [5] 6. Write a function that takes a single number as a parameter and returns
// a boolean depending on whether the input number is positive (`true`) or
// negative/zero (`false`).

function isPositive(num) {
    return num > 0;
}

// [10] 7. Write two loops, one for loop, and one while loop which each output
// the numbers `1` through `10` inclusive.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let j = 1;
while (j <= 10) {
    console.log(j);
    j++;
}

// [5] 8. Prompt the user for a number, then using a single if statement, output
// a message if the input number is either `5`, or `13`, or is divisible by `3`.

let userNumber = Number(prompt("Enter a number:"));
if (userNumber === 5 || userNumber === 13 || userNumber % 3 === 0) {
    console.log("The number meets the criteria!");
}

// [10] 9. Prompt the user for their favourite season. You can assume they will
// only provide one of `"summer"`, `"winter"`, `"autumn"`, and `"spring"`. Use a
// chained if .. else if statement to output a different message depending on
// their selection. Now write an alternative way of solving this problem using a
// switch statement instead of the if .. else if chain.

let season = prompt("What is your favourite season?");
if (season === "summer") {
    console.log("Summer is great for the beach!");
} else if (season === "winter") {
    console.log("Winter is perfect for skiing!");
} else if (season === "autumn") {
    console.log("Autumn has beautiful colors!");
} else if (season === "spring") {
    console.log("Spring brings flowers!");
}

switch (season) {
    case "summer":
        console.log("Summer is great for the beach!");
        break;
    case "winter":
        console.log("Winter is perfect for skiing!");
        break;
    case "autumn":
        console.log("Autumn has beautiful colors!");
        break;
    case "spring":
        console.log("Spring brings flowers!");
        break;
}