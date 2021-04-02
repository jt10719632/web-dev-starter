showMessage("Title...");

showMessage("Title...");

console.log("Any Message");

// const price = 40;

let welcome = 'Welcome',
    // Price is returning as 2.4000000000000004
    price = 1.1 + 1.3,
    amount = 123,
    discounted = false;
console.log("Price: " + price);

// price += 1;
// typeof gets the variable type
// showMessage(typeof price);
showMessage(amount);
console.log(price);


// let name = 'Andrea';
// let message = `Hello ${name}`
let message = "Hello";
message = message.length;

amount = amount.toString();
// Casting the string as a number
let test = Number.parseFloat("123.12");
test = Number.parseInt("123.12");
// Will parse the string up until the non number
test = Number.parseFloat("123.12A");

showMessage(test);


let saved = true;
// Flipping the boolean
saved = !saved;
showMessage(saved);

// Objects are in {}
let person = {
    firstName: 'John',
    lastName: 'Adams'
};
// typeof person is an object
// showMessage(typeof person)
showMessage(person.firstName);
// .toFixed() will return a string. Add + to the front to change it from a string to number
// if ( +(1.1 + 1.3).toFixed(2) === 2.4) {
//     showMessage('true');
// }

// == will convert number 1 to string "1", === will evaluate correctly, strictly equal to
if (1 === "1") {
    showMessage('true');
}
else {
    showMessage('false');
}


price = 1;
// (condition) ? true-statement : false-statement;
message = (price > 10) ? 'expensive' : 'cheap';

showMessage(message);

// ANY VARIABLE THAT IS DECLARED IN THE CODE BLOCK WILL REMAIN INSIDE. UNLESS IT IS DECLARED GLOBALLY
if (true) {
    let value = 'yes';
    showMessage(value);
}
// Won't be able to access value variable
// console.log(value);

for (let i = 0; i < 3; i++) {
    console.log(i)
}


let count = 1;
// Code block will be guaranteed to execute once.
do {
    console.log(count);
    count++;
} while (count < 1);

logMessage();
fn();

paramFunction(getSecretCode(2));

paramFunction('Hello', 'John');
// If you don't pass in all the parameters, all missing parameters will be set to undefined.
paramFunction('Hello');

let secretCode = getSecretCode(2);
console.log(secretCode);



let secretCode1 = getSecretCode(2);
console.log(secretCode1);

changePercentOff(30);

let mySymbol = Symbol();

person = { 
    name: "John",
    age: 32,
    partTime: false,
    [mySymbol]: 'secretInformation',
    showInfo: function() {
        showMessage(this.name + ' is ' + this.age);
    }
};

console.log(person.age);
console.log(person.name);
console.log(person.partTime);
// console.log(person.mySymbol);

person.showInfo();

// We are passing an object to this function. We can change properties and methods when we pass the object through.
function incrementAge(person) {
    person.age++;
}

showMessage(person.age);
incrementAge(person);
showMessage(person.age);

let now = new Date();
showMessage( now.toDateString());

let s = 'Hello';
// Displays the character at the position
showMessage (s.charAt(0));

const header = document.getElementById('message');

header.style.fontWeight = '1000';

const button = document.getElementById('see-review');

button.addEventListener('click', function() {
    console.log('click');
    const review = document.getElementById('review');

    if (review.classList.contains('d-none')) {
        review.classList.remove('d-none');
        button.textContent = 'Close Review';
    }
    else {
        review.classList.add('d-none');
        button.textContent = 'See Review';
    }

})