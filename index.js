const sum = require('./sum');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');
const square = require('./square');
const squareroot = require('./squareroot');

a = 1;
b = 2;
a2 = 8;
b2 = 64;

c = sum(a, b);
d = subtract(a, b);
e = multiply(b, a2);
f = divide(a2, b2);
g = square(a2);
h = squareroot(b2);


console.log(a + ' + ' + b + ' = ' + c);
console.log(b + ' - ' + a + ' = ' + d);
console.log(b + ' X ' + a2 + ' = ' + e);
console.log(b2 + ' / ' + a2 + ' = ' + f);
console.log(a2 + ' squared is ' + g);
console.log('The square root of ' + b2 + ' is ' + h);