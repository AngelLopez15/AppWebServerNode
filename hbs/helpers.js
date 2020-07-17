// importando  el hbs
const hbs = require('hbs')

// creando helpers para codigos que se repiten mucho en las funciones
// helper para obtener el año
hbs.registerHelper('getAnio', () =>{
    return new Date().getFullYear()
})

// helper para capitalizar las palabras
hbs.registerHelper('capitalizar',(texto)=>{
    let palabras = texto.split(' ')
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase()+palabra.slice(1).toLowerCase()
    })
    return palabras.join(' ')
})