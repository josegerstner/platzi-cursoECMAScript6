// REPLACEALL
const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web"

const replacedString = string.replace('JavaScript', 'Python')
console.log(string)
console.log(replacedString)

const replacedStringAll = string.replaceAll('JavaScript', 'Python')
console.log(replacedStringAll)


// METODOS PRIVADOS: #metodo
class Message {
    #show(val) { // $metodoPrivado
        console.log(val)
    }
    #get (val) {
        // ...
    }
    #set (val) {
        // ...
    }
}

const message = new Message()
message.show('Hola!')


// Promise.any: array de promesas, obtengo la primera que sea satisfactoria
const promise1 = new Promise((resolve, reject) => reject('1'))
const promise2 = new Promise((resolve, reject) => resolve('2'))
const promise3 = new Promise((resolve, reject) => resolve('3'))

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response))


// no entendí, algo que le pasás un elemento a una clase
// y ese elemento tiene como una referencia débil o algo así
// y se le pone el WeakRef para que no lo lleve el garbage collector
// .... raaaaro
class AnyClass {
    constructor(element) {
        this.ref = new WeakRef(element)
    }
}


// NUEVOS OPERADORES LÓGICOS
// AND LOGICO: &&= (lo mismo que && ?)
let isTrue1 = true
let isFalse1 = false
console.log(isTrue1 &&= isFalse1)

// OR LOGICO: ||= (lo mismo que || ?)
let isTrue2 = true
let isFalse2 = false
console.log(isTrue2 ||= isFalse2)

// NULL logico?: ??= (lo mismo que ?? ?)
let isTrue3 = undefined
let isFalse3 = false
console.log(isTrue3 ??= isFalse3)