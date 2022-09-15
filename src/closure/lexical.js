/**
 * Un closure permite acceder al scope de una función exterior desde una función interior. 
 * En JavaScript, los closures se crean cada vez que una función se genera. 
 * A diferencia de otros conceptos como funciones, 
 * variables u otros, los closures no se utilizan todas las veces.
 *  */

const myGlobal = 0;

function myFunction() { 
    const myNumber = 1;
    console.log(myGlobal);

    function parent() {//funcion interna 
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child() { 
            console.log(inner,myNumber,myGlobal);
        }
        return child();
    }
    return parent();
}

myFunction();