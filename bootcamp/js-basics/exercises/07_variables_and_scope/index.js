// You can work here or download the template!

var myVar = 5;
console.log('myVar: ', myVar);

const somethingHappens = () => {
    var myVar = 'New thing';
    console.log('myVar in function: ', myVar);
};
somethingHappens();
console.log('myVar after function: ', myVar);

if (true) {
    let letMeGo = 'Please, let go!';
    const holdMeTight = "Please, don't let go!";
    letMeGo = "You're being clingy";
    var myVar = '???';
    console.log('myVar in the if: ', myVar);

    // holdMeTight = "You're being distant.";
}

console.log('myVar, after the if: ', myVar);
let letMeGo = "I'm done hugging now.";
console.log('letMeGo: ', letMeGo);
