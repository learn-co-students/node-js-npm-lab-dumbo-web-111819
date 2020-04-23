// require('./lib/greeter');

const greet = require('./lib/greet');
const curried = greet('Yo');
console.log(curried('hi'))