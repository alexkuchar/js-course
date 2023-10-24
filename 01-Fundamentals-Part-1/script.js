/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Alex");
console.log(23);

// Declaring a Variable
let firstName = "Matilda";
console.log(firstName);

let PI = 3.1415;

let myFirstJob = "Student";
let mycurrentJob = "Student";
*/

// ASSIGNMENT: Declare 3 variables, "country", "continent" and "pupulation", assign their values according to your own country (population in millions).

/*
let country = "Germany";
let continent = "Europe";
let population = 83.2 + " Million";

console.log("Country: " + country);
console.log("Continent: " + continent);
console.log("Population: " + population);

OUTPUT
Country: Germany
Continent: Europe
Population: 83.2 Million


let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Alex');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 2007;
// birthYear = 2007;

// const job; // Illegal

var job = 'student';
job = 'still a student';

// lastName = "Kuchar"; Bad practice.
// console.log(lastName);



/** BASIC OPERATORS

// math operators
const now = 2023;
const ageAlex = now - 2007;
const ageJonas = now - 2018;
// console.log(ageAlex, ageJonas);

console.log(ageAlex * 2, ageAlex / 2, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Alex';
const lastName = 'Kuchar';

console.log(firstName + ' ' + lastName);

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++;
x--;
console.log(x);

// Comparison Operators.
console.log(ageAlex > ageJonas); // >, <, >=, <=
console.log(ageJonas >= 18);

const isFullAge = ageJonas >= 18;

console.log(now - 1991 > now - 2018);


const now = 2023;
const ageAlex = now - 2007;
const ageJonas = now - 2018;

console.log(25 - 10 - 5);

let x, y;

x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageAlex + ageJonas) / 2;
console.log(ageAlex, ageJonas, averageAge);


const firstName = 'Alex';
const job = 'student';
const birthDay = 2007;
const currentYear = 2023;

const alex = "I'm " + firstName + ', a ' + (currentYear - birthDay) + ' year old ' + job + '.';
console.log(alex);

const alexNew = `I'm ${firstName}, a ${currentYear - birthDay} year old ${job}`;
console.log(alexNew);

console.log(`String with
multiple
lines
`)



const age = 16;

if (age >= 18) {
    console.log('Alex can start his driving license 🏎️');
} else {
    const yearsLeft = 18 - age;
    console.log(`Alex is too young. Wait another ${yearsLeft} years.`)
}

const birthYear = 2007;
if (birthYear <= 2000) {
    let century = 20;
} else {
    let century = 21;
}



// type conversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Alex'));

console.log(String(25));

// type coercion
console.log('I am ' + 16 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1;
n = - 1;
console.log(n);


// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 10;
if (money) {
    console.log("You shouldn't spend it all.");
} else {
    console.log("You should get a job!");
}

let height = 0;
if (height => 0) {
    console.log('YAY! Height is defined.');
} else {
    console.log("Height is UNDEFINED");
}


const age = 18;
if (age === 18) console.log('You just became an adult. (strict)');

if (age == 18) console.log('You just became an adult. (loose)');

const favorite = prompt("What's your favorite number?");

if (favorite === 23) {
    console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
    console.log("7 is also a cool number.");
} else {
    console.log("Number is not 23 or 7. damn.");
}

if (favorite !== 23) console.log("Why not 23?");


const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive.')
// }

const isTired = true;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive.');
}


const day = 'finds';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Take the course');
        break;
    case 'tuesday':
        console.log('Skip the theorie lectures');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Watch videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the break :)');
        break;
    default:
        console.log('Invalid day.');
}
*/

// An expression is a piece of code that produces a value.

// A statement is an action.

const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log("I don't drink wine.");

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink); const tip = bill < 50 || bill > 300 ? bill * 0.20 : bill * 0.15;