const express = require('express')

// declaramos una constante app que es producto de la funcion express
const app = express()

// importando  el hbs
const hbs = require('hbs')
require('./hbs/helpers')

// para obtener el puerto que nos de heroku o casa que no exista nos de el 3000 en 
// el servidor local
const port = process.env.PORT || 3000

// creando un midleware para servir paginas estaticas
// debemos comprender que todo lo que esta en la carpeta public va a ser de dominio publico
// con __dirname estamos diciendo que toda la ruta anterior le concatene el /public
app.use(express.static(__dirname + '/public'))

// declarando el Express HBS engine
hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine', 'hbs')


//renderizando la pagina desde el midle y el archivo hbs 
app.get('/', (req, res) =>{
    res.render('home',{
        name:'angel lopez'
    })
})
app.get('/features', (req, res) => {
    res.render('features',{
        name:'angel lopez'
    })
} )
// // configuramos una solicitud GET cuando el path sea un /
// app.get('/', (req, res) => {
//     const salida = {
//         nombre:'Angel Lopez',
//         edad:29,
//         url: req.url
//     }
//     res.send(salida)
// })

// // si queremos que nos envie informacion al entrar a /data se debe configurar otro get
// app.get('/data', (req, res) => {
//     res.send('Hello World')
// })

//podemos poner un callback
app.listen(port, () => {
    console.log(`Escuchando peticones en el puerto ${port}`)
})