// You can work here or download the template!
let temp = 30;

if (temp < 15) {
    console.log('Please wear a coat!');
} else if (temp >= 15 && temp <= 25) {
    console.log('Wear a sweater.');
} else {
    console.log('Go for a swim! :D');
}

switch (temp) {
    case 10:
        console.log('Wear a coat!');
        break;
    case 20:
        console.log('Wear a sweater');
        break;
    case 30:
        console.log('Wear a t-shirt');
        break;
    default:
        console.log('Dress accordingly.');
}
switch (true) {
    case temp < 15:
        console.log('Wear a coat!');
        break;
    case temp >= 15 && temp <= 25:
        console.log('Wear a sweater');
        break;
    case temp > 25:
        console.log('Wear a t-shirt');
        break;
    default:
        console.log('Dress accordingly.');
}
