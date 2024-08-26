//What's happening here?

20 + 5;

// console.log(20 + 5);

//VARIABLES //////////////////////////////////////////////////
let result = 20 + 5;
// console.log('result:', result);

result = '25';

// console.log('result:', result);

const somethingToKeep = "Don't let me go!";

const somethingtokeep = "Use camel case! It's still going to work.";

// console.log(somethingToKeep);
// console.log(somethingtokeep);
let myNum = 0;

//do some stuff;
myNum = 1;

var dontUseMe = "Please really don't, only if you have to.";

// console.log(dontUseMe);

//ARITHMETIC ////////////////////////////////////////////

myNum += 7;
//same as: myNum = myNum + 7
// console.log(myNum);

myNum++;
++myNum;
//same as: myNum = myNum + 1
// console.log(myNum);

//COMPARISONS //////////////////////////////////////////////////
//simple comparison
//Don't use this one - usually
// console.log(10 == '10');
// console.log(0 == false);
// console.log(10 != '10');

//strict comparison
// console.log(10 === '10');
// console.log(10 !== '10');

//logical and
// console.log(10 === 10 && 10 === '10');

//logical or
// console.log(10 === 10 || 10 === '10');

//logical not
// console.log(!0);
// console.log(!true);

//CONDITIONALS //////////////////////////////////////////////////////
// IF/ELSE, IF/ELSE IF
let weatherToday;
let temp = 1;

if (temp >= 20) {
    let weatherToday = 'toasty';
    weatherToday = 'warm';
    const localConst = "I'm a local, not a tourist.";
    // console.log(localConst);

    //string concatenation
    // console.log('The weather today is ' + weatherToday + '.');

    //template literal
    // console.log(`The weather today is ${weatherToday}.`);
} else if (temp >= 10 && temp < 20) {
    weatherToday = 'chilly';
    // console.log(`The weather today is ${weatherToday}.`);
} else if (temp > 0 && temp < 10) {
    weatherToday = 'real cold';
} else {
    console.log("I'm not sure of the weather weather today.");
}

// console.log(`The weather today is ${weatherToday}.`);
// console.log(localConst);

//ternary operator ///////////////////////////
let isPlayTime = true;

// if (isPlayTime) {
//     console.log('Yay, time to play!');
// } else {
//     console.log('Oh no, I have to work :(.');
// }

// isPlayTime
//     ? console.log('Yay, time to play!')
//     : console.log('Oh no, I have to work :(.');

let time = 12;

//chaining ternary
// time > 12 && time < 18
//     ? console.log('Good afternoon')
//     : time > 18
//     ? console.log('Good evening')
//     : console.log('Good day');

//switch statements ///////////////////////

let characterClass = 'wizard';

// switch (characterClass) {
//     // (characterClass === 'fighter')
//     case 'fighter':
//         console.log("I'm very strategic!");
//         break;
//     case 'monk':
//         console.log('Who needs weapons, when I have my fists!');
//         break;
//     case 'wizard':
//         console.log('I get my magic from books.');
//     case 'sorcerer':
//     case 'warlock':
//         console.log('I can do powerful magic!');
//         break;
//     default:
//         console.log('I love DnD!');
// }

//FUNCTIONS //////////////////////////////////////////
//declaration
function sayHelloWorld() {
    console.log('Hello world!');
}
sayHelloWorld();

function writeAMessage() {
    return 'Hello world!';
}

const helloMessage = writeAMessage();

console.log(helloMessage);

//expressions

const goodByeWorld = function () {
    console.log('Goodbye, cruel world!');
};
goodByeWorld();

//arrow functions
const makeASandwich = () => {
    console.log("Here's your sandwich!");
};

makeASandwich();

const square = (num) => {
    return num * num;
};

console.log(square(7));

const multiply = (num1, num2 = 8) => {
    return num1 * num2;
};
console.log(multiply(5, 6));
console.log(multiply(5));
