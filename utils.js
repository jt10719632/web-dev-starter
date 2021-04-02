function showMessage(message) {
    document.getElementById('message').textContent = message;
}

function logMessage() {
    console.log('Here is a message');
}

// Name of function in a function expression is optional.
let fn = function loggingFunction () {
    console.log('This is a function expression')
}

fn();


function paramFunction(message, name) {
    console.log(message);
    console.log(name);
}

// Functions are able to access global variables
let key = 42; 
// If a function does not have a return value, it will return Undefined.
function getSecretCode(value) {

    // Variables within functions will go away after the function is ran. In this case, key will log out as 12 everytime we run this function.
    let keyGenerator = function() {
        let key = 12;
        console.log('in keyGenerator: ', key);
        // Without returning a value for keyGenerator, the code after this block will not have a value to multiple by. Resulting in NaN
        // return 1; 
    }

    let code = value * keyGenerator();
    console.log(' in getSecretCode: ', key);
    return code;
}


function changePercentOff(percent) {
    document.getElementById('percent-off').textContent = percent + "% OFF";
}