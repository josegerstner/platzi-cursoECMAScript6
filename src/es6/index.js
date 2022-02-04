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