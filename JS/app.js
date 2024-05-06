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

function mesnaje(){
    console.log('homla desde la funcion');
}


mesnaje()

let numero1 = 20;
let numero2 = 20
const suma = function(numero1, numero2){
    console.log(numero1 + numero2);
}

suma(numero1, numero2);

//funcion iife se llama a si misma, no es necesaria invocarla 
(function(){
    console.log('esta funcion se llama a si misma');
})();

// C:\Program Files\Microsoft\jdk-11.0.16.101-hotspot\bin

const number1 = 20;
const number2 = "20";

console.log(typeof(number1.toString()))
console.log(typeof(parseInt(number2)))

function sum(numero1 = 0, numero2 = 0){
    return numero1 + numero2;
}

console.log(`Suma con una funcion: ${sum(number1, parseInt(number2) )}`)
console.log(`Suma con una funcion: ${sum(45555)}`)

let sum1 = function(numero1 = 0, numero2 = 0){
    return numero1 + numero2
}

console.log(`suma con variable como funcion: ${sum1(number1, parseInt(number2))}`)
console.log(`suma con variable como funcion: ${sum1(666)}`)


let total2 = 0;

function compraTotal(numero){
    return total2 += numero;
}

compraTotal(666)
compraTotal(777)
compraTotal(888)
compraTotal(999)
compraTotal(555)
compraTotal(444)
compraTotal(333)

console.log(`El total de su compra es: ${total2}`);

function conFactura(total){
    return 1.16 * total;
}

console.log(`El total de su compar con factura es: ${conFactura(total2)}`);

//objeto con atributos como elemetnos
const reproductor = {
    reproducir: function(nombreCancion){
        console.log(`Reproduciendo ${nombreCancion}`)
    },
    pausar: function(nombreCancion){
        console.log(`Pausando ${nombreCancion}`)
    },
    artistaNombre: function(nombreArtista){
        console.log(`Nombre del artista: ${nombreArtista}`)
    }
}

reproductor.reproducir('Alive')
reproductor.pausar('Alive')
reproductor.artistaNombre('Daft punk');

//arrow fuctions

let sumaArrow = (n1, n2) => console.log(n1 + n2);

sumaArrow(568,598);

let mesnaje1 = tecnologia => console.log(`Aprendiendo ${tecnologia}`);

mesnaje1('JS')

//This 

const reservacio = {
    nombre: 'daniel',
    apellido: 'flores',
    total: 5000,
    pagado: true,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservo y su cantidad a paagr es: ${this.total} pagado: ${this.pagado}`)
    }
}

reservacio.informacion();

//Object constructor

function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

Producto.prototype.formatearProducto = function(){
    return `El producto ${this.nombre} tiene un precio de: ${this.precio}`
}


const producto10 = new Producto('pantalla', 9000);

console.log(producto10.formatearProducto());

function Cliente(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

Cliente.prototype.formatearCliente = function(){
    return `Cliente: ${this.nombre} ${this.apellido}`
}

const cliente10 = new Cliente('daniel', 'flores');

console.log(cliente10.formatearCliente());


class Product{

    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    getPrecio(){
        return this.precio;
    }

    toString(){
        return `Producto: ${this.nombre} Precio: ${this.precio}`;
    }

}

class Libro extends Product{

    constructor(nombre, precio, serial){
        super(nombre, precio);
        this.serial = serial;
    }

    toString(){
        return `${super.toString()} y su serial es ${this.serial}`;
    }

    getSeriarl(){
        return `Serial del libro ${this.serial}`;
    }

}

const product1 = new Product('mouse', 250);
console.log(product1.toString());
console.log(`El precio: ${product1.getPrecio()}`);



const libro1 = new Libro('los protocolos de los sabios de sion', 250, '123456789');
console.log(libro1.toString());
console.log(libro1.getSeriarl());

/* prmises */

const usuarioAutenticado = new Promise( (resolve, reject) =>  {
    const auth = true

    if(auth){
        resolve('Usuario autenticado');
    }else{
        reject('no se pudo iniciar sesion');
    }

})

usuarioAutenticado
    .then( resultado => console.log(resultado) )
    .catch( error => console.log(error) )


const boton = document.querySelector('#boton');

boton.addEventListener('click', function(){
    Notification.requestPermission()
        .then( resultado => console.log(`El resultado es ${resultado}`) );
})

if( Notification.permission  == 'granted'){
    new Notification('Esta es una notificacion de cheemsito', {
        icon: 'img/cheems3.png',
        body: 'Homla te he hackeado'
    })
}

//async await
function descargarArchivos(){
    return new Promise( resolve => {

        console.log('Descargando archivos...');

        setTimeout(() => {
                resolve('los archivos han sido descargados');
        }, 5000);
    })
}


async function app(){
    try {
        const resultado = await descargarArchivos();

        console.log(resultado);
    } catch (error) {
        console.log(error)
    }
}

app();

async function obtenerEmpleado(){
    const archivo = 'empleados.json'

    // Con promises
    // fetch(archivo)
    //     .then( resultado => {
    //         return resultado.json()
    //     })
    //     .then( datos => {
    //         const {empleados} = datos;

    //         empleados.forEach( empleado => {
    //             console.log(empleado.id)
    //             console.log(empleado.nombre)
    //             console.log(empleado.puesto)
    //         })
    //     })

    const resultado = await fetch(archivo)
    const datos = await resultado.json()
    console.log(datos)
}

obtenerEmpleado()