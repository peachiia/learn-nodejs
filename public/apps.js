console.log('Hi!')
console.log('waiting timeout for 3 seconds...')

var interval = 3000;

var timer = setTimeout(function(){
    console.log('Done!');
}, interval);