const fs = require( 'fs' )
const chalk = require( 'chalk' )

const getNotes = function ()
{
    return 'Your note...'
}

const addNote = function ( title, body )
{
    const notes = loadNotes()
    const duplicateNotes = notes.filter( function ( note )
    {
        return note.title === title
    } )

    if ( duplicateNotes.length === 0 )
    {
        notes.push( {
            title: title,
            body: body
        } )
    }
    else
    {
        console.log( 'Note title taken!' )
    }

    saveNotes( notes )
}

const loadNotes = function ()
{
    try
    {
        const dataBuff = fs.readFileSync( 'notes.json' )
        const dataJSON = dataBuff.toString()
        return JSON.parse( dataJSON )
    } catch ( error )
    {
        return []
    }
}

const removeNote = function ( title )
{
    const notes = loadNotes()
    const notesToKeep = notes.filter( function ( note )
    {
        return note.title !== title
    } )

    if ( notes.length > notesToKeep.length )
    {
        console.log( chalk.green.inverse( 'Note removed!' ) )
        saveNotes( notesToKeep )
    }
    else
    {
        console.log( chalk.red.inverse( 'No note found!' ) )
    }

}

const saveNotes = function ( notes )
{
    const dataJSON = JSON.stringify( notes )
    fs.writeFileSync( 'notes.json', dataJSON )
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}