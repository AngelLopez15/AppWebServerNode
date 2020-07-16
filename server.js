const express = require('express')
// declaramos una constante app que es producto de la funcion express
const app = express()

// configuramos una solicitud GET cuando el path sea un /
app.get('/', (req, res) => {
    const salida = {
        nombre:'Angel Lopez',
        edad:29,
        url: req.url
    }
    res.send(salida)
})

// si queremos que nos envie informacion al entrar a /data se debe configurar otro get
app.get('/data', (req, res) => {
    res.send('Hello World')
})

//podemos poner un callback
app.listen(3000, () => {
    console.log('Escuchando peticones en el puerto 3000')
})