const chalk = require( 'chalk' )
const yargs = require( 'yargs' )
const notes = require( './notes.js' )

yargs.version( '1.1.0' )

yargs.command( {
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note  body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function ( argv )
    {
        notes.addNote( argv.title, argv.body )
    }
} )

console.log( yargs.argv )
// node app.js add --title="t2" --body="b2"