const jwt = require('jsonwebtoken')

//process argument para leer comandos desde la terminal
const [, , option, secret, nameOrToken] = process.argv

//validamos que estén todos los argumentos indicados anteriormente
if ( !option || !secret || !nameOrToken ){
    return console.log('Missing arguments')
}

// firmar un web token
function signToken(payload, secret) {
    return jwt.sign( payload, secret )
}

// verificar un token
function verifyToken(token, secret) {
    return jwt.verify(token, secret)
}


//lógica de funcionamiento según los parametros enviados desde la terminal
if( option == 'sign' ) {
    console.log(signToken({ sub: nameOrToken }, secret))
} else if ( option== 'verify' ) {
    console.log(verifyToken(nameOrToken, secret))
} else {
    console.log(`options nedd to be 'sign' or 'verify'`)
}