const chalk = require( 'chalk' )
const yargs = require( 'yargs' )

yargs.version( '1.1.0' )

yargs.command( {
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title'
        }
    },
    handler: function ( argv )
    {
        console.log( 'Adding a new note!', argv )
    }
} )

console.log( yargs.argv )