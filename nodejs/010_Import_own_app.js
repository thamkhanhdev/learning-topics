const validator = require( 'validator' )
const add = require( './010_ext.js' )

const sum = add( 10, 50 )

console.log( sum )
console.log(validator.isEmail('Test@gmail.com'))