const fs = require( 'fs' )

const book = {
    title: 'Ego is the Enmy',
    author: 'Rayn Holiday'
}

const bookJSON = JSON.stringify( book )
console.log( bookJSON )

const parseDat = JSON.parse( bookJSON )

console.log( parseDat.author )
fs.writeFileSync( '1-json.json', bookJSON )

const dataBuff = fs.readFileSync( '1-json.json' )
const dataJSON = dataBuff.toString()
const data = JSON.parse(dataJSON)
console.log( data.author)