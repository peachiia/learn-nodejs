var fs = require('fs');


// Sync
var file = fs.readFileSync('read.txt', 'utf8');
console.log(file)

fs.writeFileSync('write.txt', file);
console.log('Write Done!')


// Async
var file = fs.readFile('read.txt', 'utf8', function(err, data) {
    console.log(data)

    fs.writeFileSync('write.txt', data);
    console.log('Write Done!');
});
