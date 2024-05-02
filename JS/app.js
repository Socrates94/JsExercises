"use strict";

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


// freeze no te premite modificar al objeto

// Object.freeze(producto)
// console.log(Object.isFrozen(producto))

const dimensiones = {
    peso: '12kg',
    altura: '2 metros'
}

// unir dos objetios

const nuevoProducto = {...producto, ...dimensiones};

console.log('Solo producto')
console.log(producto);
console.log('Producto con dimensiones')
console.log(nuevoProducto)


// Arreglos
const numeros = [50,15,23,15,200,47];
console.log(numeros);
console.table(numeros);
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

const meses = new Array('enero', 'febrero', 'marzo', 'marzo', 'abril', 'mayo');
console.log(meses)
console.table(meses)
meses.forEach(mes => {
    console.log(mes);
});
// unshift agrega elemetnos al principio
meses.unshift('mes 0');

//push agrega elementos al final
meses.push('junio', 'julio', 'agosto');
meses.forEach( mes => {
    console.log(mes);
});

const nuevoArreglo = [...meses, 'septiembre'];
nuevoArreglo.forEach( mes => {
    console.log(mes)
})


const arreglo = ["Hola cheems", 20, true, false, null, {nombre: 'daniel', edad: 20}, [1,2,3,4]];
console.log(arreglo)
console.table(arreglo)
arreglo.forEach(elemento => {
    console.log(elemento)
});

// objeto de arreglos

let total = 0;

const carrito = [

    {nombre: 'celular', precio: 4000 },
    {nombre: 'computadora', precio: 8000},
    {nombre: 'tableta', precio: 3500 },
    {nombre: 'teclado', precio: 700},
    {nombre: 'raton', precio: 500 },
    {nombre: 'pantalla', precio: 12000},
    {nombre: 'lampara', precio: 300}
];



carrito.forEach( articulo =>  {
    console.log(`Producto: ${articulo.nombre} Precio: ${articulo.precio} `);
    total += articulo.precio;
})

console.log(`Su total a pagar es: ${total}`);

// funciones
