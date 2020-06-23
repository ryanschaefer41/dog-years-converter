let myAge = 28; // set my age as variable
let earlyYears = 2; // will be used to calculate the first two years of dog's life
earlyYears *= 10.5;

let laterYears = myAge - 2; // we already accounted for the first two years above
laterYears *= 4; // calculate dig years for later human years, and reassign to the laterYears variable

// console.log(earlyYears);
// console.log(laterYears);

myAgeInDogYears = earlyYears + laterYears; // convert my years to dog years

let myName = 'Terri'.toLowerCase(); // converts my name to all lowercase
console.log('My name is ' + myName + '. I am ' + myAge + ' years old in human years which is ' + myAgeInDogYears + ' years old in dog years.'); // prints sentence
