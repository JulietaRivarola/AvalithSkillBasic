const original = {
    a: 1,
    b: 2,
    c: 3,
};
// -------
//let sinB = null;
// let valorDeC = null;


//Copia del objeto original sin la clave "b"
const {
    b,
    ...sinB
} = original;

//Obtiene el valor de la clave "c"
const {
    c: valorDeC
} = original;


console.log(sinB);
console.log(valorDeC);