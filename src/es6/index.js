// DEFAULT PARAMETERS
// una de las cosas que se agregaron en ES6 son los parámetros por defecto
function newFunction(name, age, country) {
    var name = name || 'Oscar'
    var age = age || 32
    var country = country || 'MX'
    console.log(name, age, country)
}

newFunction()
newFunction("Jose", 33, "AR")

// es6
function newFunction2(name='Oscar', age=32, country='MX') {
    console.log(name, age, country)
}

newFunction2()
newFunction2("Jose", 33, "AR")


// TEMPLATE LITERALS
let hello = "Hello"
let world = "World"
let epicPhrase = hello + " " + world
console.log(epicPhrase)

// es6
let epicPhrase2 = `${hello} ${world}!`
console.log(epicPhrase2)


// antes
let lorem = "una frase épica que necesitamos \n"
 + "otra frase épica"
// es6
let lorem2 = `una frase épica que necesitamos
ahora  es otra frase épica
`
console.log(lorem)
console.log(lorem2);


// desestructuración
let person = {
    'name': 'Oscar',
    'age': 32,
    'country': 'MX'
}
console.log(person.name, person.age, person.country)
// es6
let { name, age, country } = person
console.log(name, age, country);


// spread operator: permite agregar todos los elementos de un array dentro de otro array
let team1 = ['Oscar', 'Julian', 'Ricardo']
let team2 = ['Valeria', 'Jessica', 'Camila']

let education = ['David', ...team1, ...team2]
console.log(education);


// let
{
    var globalVar = 'Global Var'
}

{
    let globalLet = 'Global Let'
    console.log(globalLet);
}
console.log(globalVar)
// console.log(globalLet)

// const
const a = 'a'
// a = 'b'
console.log(a)


//
let name = 'oscar'
let age = 32
// antes
obj = { name:name, age:age }
// ES6
obj2 = { name, age }
console.log(obj2)

// ARROW FUNCTIONS - iterar
const names = [
    { name: 'Oscar', age: 32 },
    { name: 'Yesica', age: 27 }
]

let listOfNames = names.map(function (item) {
    console.log(item.name)
})

let listOfNames2 = names.map(item => console.log(item.name))
const listOfNames3 = (name, age, country) => {
    // ...
}
const listOfNames4 = name => {
    // ...
}
const square = num => num * num


// ASINCRONISMO
// promesas
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(false) {
            resolve('Hey!')
        } else {
            reject('Ups!')
        }
    })
}
helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error))

/************************** */
// CLASES MODULOS Y GENERADORES

// CLASES
class calculator {
    constructor() {
        this.valueA = 0
        this.valueB = 0
    }

    sum(valueA, valueB) {
        this.valueA = valueA
        this.valueB = valueB
        return valueA + valueB
    }
}

const calc = new calculator()
console.log(calc.sum(2,2))

// IMPORTAR MODULO
import { hello } from './module'
hello()

// GENERADORES
function* helloWorld() {
    if(true) {
        yield 'Hello '
    }
    if(true) {
        yield 'World'
    }
}

const generatorHello = helloWorld()
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)