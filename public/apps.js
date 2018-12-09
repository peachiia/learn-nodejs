var events = require('events');

// Normal
/*
var util = require('util');

var Person = function(name) {
    this.name = name; // assign name to storage in Person Object
}

util.inherits(Person, events.EventEmitter);
*/

// ES2015 (ES6) Class Style
class Person extends events.EventEmitter{
    constructor(name) {
        super();
        this.name = name; // assign name to storage in Person Object
    }
}



var alice = new Person('alice');
var bella = new Person('bella');
var cindy = new Person('cindy');

var person_list = [alice, bella, cindy]

person_list.forEach(function(obj) {
    obj.on('speak', function(msg) {
        console.log(obj.name + ' said: '+ msg);
    });
});

alice.emit('speak', 'Heyyy~!!')