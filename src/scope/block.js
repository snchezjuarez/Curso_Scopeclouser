/** block scope  emsript 6*/
function fruits() { 
    if (true) { 
        var fruit1 = 'Apple';// scope nivel funcion
        let fruit2 = 'kiwi';// block scope
        const fruit3 = 'Banana';// block scope
        console.log(fruit2);
        console.log(fruit3);
    }

    console.log(fruit1);
}

fruits();