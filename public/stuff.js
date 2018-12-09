var counter = function(arr) {
    return 'Array have ' + arr.length + ' elements.';
}

var adder = function(num_a, num_b) {
    return 'A + B = ' + (num_a + num_b);
}

var PI = 3.1415;


module.exports.counter = counter;
module.exports.adder = adder;
module.exports.PI = PI;

/* OR

module.exports = {
    counter: counter,
    adder: adder,
    PI: PI
}
*/