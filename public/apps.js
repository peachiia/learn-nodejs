var events = require('events');

var emitterHandler = new events.EventEmitter();

emitterHandler.on('eventKey', function(msg) {
    console.log('eventKey called: ' + msg);
})

emitterHandler.emit('eventKey', 'Event Message ..~');