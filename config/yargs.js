
const yargs = require( 'yargs/yargs' )
const { hideBin } = require( 'yargs/helpers' )
const argv = yargs( hideBin( process.argv ) )
    .options( 'b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la Base de la tabla de multiplicar '
    })
    .options( 't', {
        alias: 'to',
        type: 'number',
        demandOption: false,
        describe: 'Limite de hasta donde va a multiplicar'
    })
    .options( 'l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        describe: 'Muestra la tabla en consola si encuentra la bandera'
    })

    .check( ( argv, options ) => {
        if( isNaN( argv.base ) ) {
            throw 'La base tiene que ser un número'
        }
        return true
    } )
    .argv

module.exports= argv;
