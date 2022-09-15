/** variables */

var a; // declarando
var b = 'b'// declaramos / asignamos
b = 'bb'; // reasignacion 
var a = 'aa' // redeclaracion

/** global scope */
var fruit = 'Apple';// variable global

function bestFruit() { 
    console.log(fruit)
}
bestFruit();

function countries() {
    country = 'colombia' // pasa tener un scope global si no se declara la varibale
    console.log(country);
}

countries();
console.log(country);