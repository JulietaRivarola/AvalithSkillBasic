const original = ['Rojo', 'Verde', 'Azul', 'Amarillo'];
// -------
let indiceAmarillo = null;
let cantidadColoresConA = 0;
let arregloSinAzul = [];
let ordenadoPorCantidadLetras = [];
let arregloConNuevoColorInicio = [];
let arregloConNuevoColorFin = [];

//indiceAmarillo: Indice de la ubicacion en el arreglo de 'Amarillo'
indiceAmarillo = original.indexOf('Amarillo');

//cantidadColoresConA: Cuantos colores hay en el arreglo con la letra 'a' (Mayuscula o minuscula)
original.forEach(element => {
    if(element.toLowerCase().includes('a')){
        cantidadColoresConA++;
    }
});

//arregloSinAzul: El arreglo original sin el valor 'Azul'
arregloSinAzul = original.filter(color => color !=='Azul');

//ordenadoPorCantidadLetras: El arreglo orginal ordenado de forma ascendente por la cantidad de letras en su nombre.
ordenadoPorCantidadLetras = original.sort(function(a, b) {
    return a.length - b.length
});

//arregloConNuevoColorInicio: El arreglo original con un nuevo color al inicio del mismo.
arregloConNuevoColorInicio = [].concat(original).unshift('Violeta');

//arregloConNuevoColorFin: El arreglo original con un nuevo color al final del mismo.
arregloConNuevoColorFin = original.concat('Naranja');

console.log(indiceAmarillo);
console.log(cantidadColoresConA);
console.log(arregloSinAzul.toString());
console.log(ordenadoPorCantidadLetras.toString());
console.log(arregloConNuevoColorInicio.toString());
console.log(arregloConNuevoColorFin.toString());
console.log(original.toString());
