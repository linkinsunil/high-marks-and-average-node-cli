const readlineSync = require("readline-sync");
const chalk = require("chalk");

let st1 = readlineSync.question("Enter " + chalk.blue("1st student's name: "));
let ut1 = readlineSync.question("Enter " + chalk.blue("1st")+" student's UT scores: ");
let pf1 = readlineSync.question("Enter " + chalk.blue("1st")+" student's PF scores: ");
let f1 = readlineSync.question("Enter " + chalk.blue("1st")+" student's final scores: ");

let st2 = readlineSync.question("Enter " + chalk.yellow("2nd student's name: "));
let ut2 = readlineSync.question("Enter " + chalk.yellow("2nd")+" student's UT scores: ");
let pf2 = readlineSync.question("Enter " + chalk.yellow("2nd")+" student's PF scores: ");
let f2= readlineSync.question("Enter " + chalk.yellow("2nd")+" student's final scores: ");

let st3 = readlineSync.question("Enter "+ chalk.blue("3rd student's name: "));
let ut3 = readlineSync.question("Enter "+ chalk.blue("3rd")+" student's UT scores: ");
let pf3 = readlineSync.question("Enter "+ chalk.blue("3rd")+" student's PF scores: ");
let f3= readlineSync.question("Enter "+ chalk.blue("3rd")+" student's final scores: ");

let st4 = readlineSync.question("Enter "+ chalk.yellow("4th student's name: "));
let ut4 = readlineSync.question("Enter "+ chalk.yellow("4th")+" student's UT scores: ");
let pf4 = readlineSync.question("Enter "+ chalk.yellow("4th")+" student's PF scores: ");
let f4= readlineSync.question("Enter "+ chalk.yellow("4th")+" student's final scores: ");

let st5 = readlineSync.question("Enter "+ chalk.blue("5th student's name: "));
let ut5 = readlineSync.question("Enter "+ chalk.blue("5th")+" student's UT scores: ");
let pf5 = readlineSync.question("Enter "+ chalk.blue("5th")+" student's PF scores: ");
let f5= readlineSync.question("Enter "+ chalk.blue("5th")+" student's final scores: ");

let students= [st1, st2, st3, st4, st5]
let utScores= [ut1, ut2, ut3, ut4, ut5].map(Number);
let pfScores= [pf1, pf2, pf3, pf4, pf5].map(Number);
let fScores= [f1, f2, f3, f4, f5].map(Number);
let scores = [];

function checkScore(){

    let highScore = 0;
    let topper = "";
    let average = 0;

    for(let i=0; i<students.length; i++) {
    const sum = Number(utScores[i]) + Number(pfScores[i]) + Number(fScores[i]);
    scores.push(sum)
    }

    for(let i=0; i<students.length; i++){
      if (highScore < scores[i]){
        highScore = scores[i];
        topper = students[i]
      }
      average += scores[i]
      console.log(`${chalk.blue("Total score")} of ${chalk.yellow(students[i])} is ${chalk.green.bold(scores[i])}`)
    }
    average = average / students.length;

    console.log(`${chalk.yellow.bold(topper)} has topped with score ${chalk.green.bold(highScore)}`);
    console.log(`${chalk.yellow.bold("Average score")} of these 5 students is ${chalk.green.bold(average)}`)

}

checkScore();
