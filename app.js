const { crearArchivo } = require( "./helpers/multiplicar" );
const argv = require('./config/yargs')
require('colors')

console.clear()



crearArchivo(argv.base, argv.listar, argv.to)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(e => console.log(`Ocurrio un error ${e}`))

