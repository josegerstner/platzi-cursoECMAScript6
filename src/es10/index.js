// FLAT: aplana los elementos de un array
let array1 = [1,2,3, [1,2,3, [1,2,3]]]
console.log(array1.flat(2))

// flatMap: recorre todos los elementos y aplica flat también
let array2 = [1,2,3,4,5]
console.log(array2.flatMap(value => [value, value*2]))


// trimStart: elimina los espacios al principio de un string
let hello1 = '       hello world'
console.log(hello1)
console.log(hello1.trimStart())

// trimEnd: elimina los espacios al final de un string
let hello2 = 'hello world     '
console.log(hello2)
console.log(hello2.trimEnd())

// se puede no pasar parámetro al catch del try-catch
try {

} catch {
    error
}

// Object.fromEntries: me transforma un array de arays a un objeto
let entries = [["name", "oscar"], ["age", 32]]
console.log(Object.fromEntries(entries))


// objeto tipo simbolo?
let mySymbol = 'My Symbol'
let symbol = Symbol(mySymbol)
console.log(symbol.description)
