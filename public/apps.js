// normal function
function sayHi() {
    console.log('hi');
}

// function expression
var sayBye = function() {
    console.log('bye');
} 

// function that call function
function callFunction(func) {
    func();
}

sayHi();
callFunction(sayHi)
sayBye();
callFunction(sayBye);