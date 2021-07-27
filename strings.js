const stringA = 'Rojo,Verde,Amarillo,Azul';
const stringB = 'Sergio';
const stringC = 'Damian';
const stringD = 'Mi nombre es Damian y tengo 28 años';
// -------
let tamanioA = 0;
let cantidadLetraR = 0;
let nombreCompleto = '';
let fraseOtroNombre = '';
let posicionNombre = null;
let arregloParseado = [];

//Tamaño del string A
tamanioA = stringA.length;

//Cantidad de letras R (Mayuscula o minuscula) que hay en el string A
cantidadLetraR = stringA.toLowerCase().split('').reduce((acc, element) => {
    if(element === 'r'){ acc++; }
    return acc;
}, 0);

//Forma el nombre completo a partir de los strings B y C
nombreCompleto = stringB.concat(' ', stringC);

//Cambia el nombre 'Damian' del string D con el nombre del string B
fraseOtroNombre =  stringD.replace(stringC, stringB);

//Posicion de 'Damian' en el string D
posicionNombre = stringD.indexOf('Damian');

//Arreglo formado a partir del string A

arregloParseado = stringA.split(',');

console.log(tamanioA);
console.log(cantidadLetraR);
console.log(nombreCompleto);
console.log(fraseOtroNombre);
console.log(posicionNombre);
console.log(arregloParseado);