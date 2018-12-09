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


// File Deletion
console.log('Deleting...');
fs.unlinkSync('write.txt');
console.log('Deleting DONE!');

// Make Directory
// Sync ** can call only once, th secind time will be Error: EEXIST: file already exists
//fs.mkdirSync('new_folder');

// Async
fs.mkdir('new_folder', function() {
    fs.writeFileSync('./new_folder/write_in_folder.txt', fs.readFileSync('read.txt', 'utf8'));
    console.log('Write in Folder Done!')
});