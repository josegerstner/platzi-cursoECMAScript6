// Dynamic Import: 
const button = document.getElementById("btn")

button.addEventListener("click", async function () {
    const module = await import("./file") // importamos dinámicamente el file.js
    module.hello()
})


// NOTA: 
/* ME DA ERROR DE CORS AL ABRIR ESTE INDEX EN EL NAVEGADOR (la parte de importar el file.js)
    PARA PODER EJECUTARLO DE ALGUNA MANERA, NECESITO CORRERLO CON UN SERVIDOR
    POR EJEMPLO EL LIVE SERVER */

/*************************************************************************** */


// BigInt: enteros más grandes que 2**253
const aBigNumber = 9007199254740991n
const anotherBigNumber = BigInt(9007199254740991)
console.log(aBigNumber)
console.log(anotherBigNumber)


// Promise.allSettled: no importa el resultado de las promesas, importa que todas sean resueltas
const promise1 = new Promise((resolve, reject) => reject("reject"))
const promise2 = new Promise((resolve, reject) => resolve("resolve"))
const promise3 = new Promise((resolve, reject) => resolve("resolve1"))

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response))



// globalThis: es un this global, como en el navegador window, frames, etc...
console.log(window) // no funca fuera del navegador
console.log(globalThis)


// null operator
const fooo = null ?? 'default string'
console.log(fooo)

const noFooo = 'asd' ?? 'default string2' // en caso de que no sea nulo, le asigna el primer valor
console.log(noFooo)


// optional chaining
const user1 = {} // objeto vacío
console.log(user1?.profile?.email) // le pongo los ? para que no rompa (optional chaining)

if(user1?.profile?.email) {
    console.log('email')
} else {
    console.log('fail')
}