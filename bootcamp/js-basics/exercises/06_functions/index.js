// You can work here or download the template!
function greet() {
    console.log('Hello world!');
}
// greet();

// function square(num) {
//     return num * num;
// }
// const square = function (num) {
//     return num * num;
// };

const square = (num) => {
    return num * num;
};
const result = square(5);
console.log('square called with 5: ', square(5));
console.log('result: ', result);

function sillyGoose() {
    return "I'm a silly goose! Honk!";
}

const aSillyGoose = sillyGoose();
// console.log('aSillyGoose: ', aSillyGoose);

const amISilly = sillyGoose;
// console.log('amISilly: ', amISilly);

function getDayName(dayNumber) {
    let dayName;
    switch (dayNumber) {
        case 1:
            return (dayName = 'Monday');
        case 2:
            return (dayName = 'Tuesday');
        default:
            return 'This is not a valid day!';
        // console.log('This is not a valid day!');
    }
}

const day = getDayName(7);
console.log('day: ', day);

function eatPie(pieType) {
    if (pieType !== 'blueberry') {
        return 'I ate some pie';
    }
    console.log(`I ate ${pieType} pie.`);
}

eatPie('blueberry');
