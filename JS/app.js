let numero = 15
let nombre = 'daniel'
let nombre_producto = 'Monitor 4k'
let bandera = false
const pi = Math.PI
let cadena = 'A cheems le encanta el cheese cake y odia tener amsiedad'

console.log(`Valor del numero: ${numero}`);
console.log(`Hola ${nombre}`)
console.log(`Producto: ${nombre_producto}`)

if(numero % 2 == 0) {
    bandera = true
    console.log(`numero par: ${bandera}`)
}else{
    console.log(`numero par: ${bandera}`)
}

console.log(`Valor de pi: ${ pi}`)
console.log(typeof pi)

console.log(cadena.length)
console.log(cadena.indexOf('cheems'))
console.log(cadena.includes('cheems'))

let cien = 100
let docientos = 200

console.log(`La suma de los numeros: ${cien + docientos}`)
console.log(`La resta de los numeros: ${cien - docientos}`)
console.log(`La multiplicacion de los numeros: ${cien * docientos}`)
console.log(`La divicion de los numeros: ${cien / docientos}`)

let numeroAleatorio = Math.floor(Math.random() * 100)
console.log(`Numero generado aleatoriametne: ${numeroAleatorio}`)

for(let i = 0; i < 5; i++){
    console.log(i)
}

let puntuaje = 10;

++puntuaje;
puntuaje--;

console.log(puntuaje)

const nompreDePila = 'daniel'
const lastName = 'flores'

console.log(`${nompreDePila} ${lastName}`)


// Objetos en JS

const producto = {
    nombreProducto: "Peluche de cheems",
    precioProducto: 5000.20,
    disponible: true
}


producto.cantidad = 20
console.log(producto)

// delete producto.disponible;
console.log(producto)

console.log(`El nombre del producto es: ${producto.nombreProducto}`);
console.log(`El precio del producto es ${producto.precioProducto}`);
console.log(`Producto disponible: ${producto.disponible}`);

// destructuring
console.log('Haciendo destructuring a un objeto');

const {nombreProducto, precioProducto, disponible} = producto;

console.log(`El nombre del producto es: ${nombreProducto}`);
console.log(`El precio del producto es ${precioProducto}`);
console.log(`Producto disponible: ${disponible}`);