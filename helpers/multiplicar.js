const fs = require( 'fs' )
require('colors')

let salida = ''
const crearArchivo = async( value = 5, listar = false, hasta= 10 ) => {

    console.log('hasta', hasta)

    try {
        for( let i = 0; i == hasta ; i++ ) {
            const result = i * value
            salida += `${i} ${'x'.green} ${value} = ${result} \n`
        }

        if( listar ) {
            console.log( '========================='.green )
            console.log( `Tabla de ${value}` )
            console.log( '========================='.green )
            console.log( salida )
        }

        fs.writeFileSync( `tabla-de-${value}.txt`, salida );

        return `tabla-de-${value}.txt`
    } catch( e ) {
        throw e
    }


}

module.exports = {
    crearArchivo
}
