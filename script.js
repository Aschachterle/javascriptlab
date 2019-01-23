"use strict";
// let num = prompt("Enter a number.");

// if (num >=6) {
//     console.log("The number is >= 6");
// } else if (num < 5) {
//     console.log("The number is < 5.");
// } else {
//     console.log ("The number you entered is 5");
// }

// const numberOfPeople = 10

// if (numberOfPeople > 7) {
//      console.log("You have enough people to get a discount");
// }   else {
//      console.log("Sorry, you need more people in your group.");
// }

// let choice = prompt("Select a size")

// let points = prompt("Number 1 - 10");
// points = points * 10;
// if ((points >= 60) && (points <= 100)) {
//     console.log (`you passed with a ${points}%`);
// }
// else if (points <60) {
//     console.log (`you failed with a ${points}0%`);
// }
// else {
//     console.log ('invalid');
// }
// for (let i = 1; i <= 20; i++) {
//     if ((i % 2) == 0)  {
//     console.log(i);
//     }
// }
// let a = 0, j = 0;
// while (a < 30) {
//     a++;
//     j += a;
// }

// let age = 10;
// while (age <= 18) {
//     if (age === 18) {
//         console.log (`you are legally an adult`);
//         break;
//     } else {
//         console.log(`you are ${age} years old`);
//         age++;
//     }
// }

// let food = ["tacos", "Burritos", "cake"];
// for (let value of food) {
//     console.log(value);
// }

// let num = 0
// while (age <= 100) {
//     age++;
//     if (num % 3 = 0 && num % 5 == 0) {
//     console.log (`fizzbuzz`);
//     }
//     if (num % 3 ===0) {
//     console.log (`fizz`);
//     }
//     if (num % 5 ===0) {
//     console.log (`buzz`);
//     }
//     if {
//         console.log(num);
//     }

// }

// for (let i = 1; i <= 50; i++) {
//     if (i % 15 === 0) console.log("fizzbuzz");
//     else if (i % 3 === 0) console.log("fizz");
//     else if (i % 5 === 0) console.log ("buzz");
//     else console.log(i);
//     }


// for (var i=1; i < 101; i++){
//     if (i % 15 == 0) console.log("FizzBuzz");
//     else if (i % 3 == 0) console.log("Fizz");
//     else if (i % 5 == 0) console.log("Buzz");
//     else console.log(i);
// }

let play = prompt (`Would you like to play a game?`)

let wins = 0
let healthAdam = 40
let healthGrant = 10

if (play == "no") {
    console.log (`Ok we will play another time`);
}   else if (play == "yes") { 
    let name = prompt("What is your name?");
    console.log (`Health for ${name} is ${healthAdam} and health for Grant is ${healthGrant}`);
    while (name === name) {
        if (wins === 3) {
            console.log (`${name} Wins`);
            break;
        }
        else if (healthAdam <= 0) {
            console.log (`Grant Wins`);
            break;
        }
        else if (healthGrant <=0 && healthAdam > 0) {
            healthGrant = 10;
            wins ++;
        }
        else {
            healthAdam -= Math.floor((Math.random() * 2) + 1);
            healthGrant -= Math.floor((Math.random() * 2) + 1);
            console.log (`${name} has ${healthAdam} health left`);
            console.log (`Grant has ${healthGrant} health left`);
        }
        

    }
    console.log (`${name} won ${wins} times`);
}


