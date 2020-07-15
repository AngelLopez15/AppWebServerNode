// importamos el paquete HTTP de Node
const http = require('http')

// Para poder escuchar peticiones http debemos crear el servidor
// recibe un callback que recibe dos parametros
// "req" que es son los request o solicitudes
// "res" las respuestas que nuestro servidor va a enviar
// tambien debemos especificar el puerto

http.createServer((req, res)=>{
    res.write('Hola Mundo')
    // debemos indicarle que ta terminamos de crear la respuesta
    res.end()
})
.listen(8080)

console.log('escuchandoe el puerto 8080')