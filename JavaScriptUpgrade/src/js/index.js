const nombre ="hola"
const booleano = true
const numero = 1
const variable = undefined
const nulo = null

console.log(String(numero))
//console.log(typeof booleano)
//console.log(typeof numero)
//console.log(typeof variable)
//console.log(typeof null)
const boleano1 = true
const string = "5"
//Convertir en numeros
console.log(Number(string),Number(boleano1))
const var1 = "two"
const var2 = true
if(var1 > var2 ){
    console.log("se ejecuta")
}else{
    console.log("no se ejecuta")
}
console.log(Number.MAX_VALUE,Number.MIN_VALUE)
const var10 ="123"
if(!Number.isNaN(var10)){
    const var12 = +var10
    console.log(typeof var12)
    console.log(var12)
}

const texto1 = "Aprendiendo JavaScript"
console.log(texto1.length)
console.log(texto1.toLowerCase().includes("java".toLowerCase()))
console.log(texto1.toUpperCase())
console.log(texto1.toLowerCase().replace("javascript", "python"))
console.log(texto1.slice(9))
console.log(texto1.repeat(3))

console.log(Math.ceil(Math.random()*10))

console.log(Date.now())

const ciudades = ['madrid','tokyo','paris','berlin'];
console.log(ciudades.length)
console.log(ciudades.indexOf(1,4))
console.log(ciudades)
ciudades.push('Los Angeles')
console.log(ciudades)

const paises = ['Japon', 'Islandia','China','Mexico']
const ciuYpais = ciudades.concat(paises)
console.log(ciuYpais)

// JSON.stringify() -> Convierte el objeto en String (JSON)
// json.parse()-> Convierte la String (JSON) en Object

const jsonConvertido = JSON.stringify(objeto) // String (JSON)
console.log(typeof JSON.parse(jsonConvertido))