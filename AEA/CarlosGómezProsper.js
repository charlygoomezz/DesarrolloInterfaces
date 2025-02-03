import { readFileSync } from 'fs';
const dataJson = readFileSync('JavaScriptUpgrade/src/assets/cherry.json','utf8');
const data = JSON.parse(dataJson);
//EJERCICIO 1
/**
 * Ejercicio 1 (1.5 pts)
Para este ejercicio, vas a implementar una función arrow que manipule una URL dada
siguiendo estos pasos:
1. Recibirá una URL como parámetro. Esta URL corresponderá a un recurso obtenido
desde el objeto json cuando se llame a la función.
2. Separa la URL en función del carácter “/”, generando un array con cada uno de los
segmentos que la componen.
3. Convierte todos los elementos del array generado anteriormente a mayúsculas.
4. La función debe devolver el array resultante
Tras realizar la función, llámala utilizando una propiedad del objeto JSON que contenga una
URL
 */
console.log("EJERCICIO 1")
const manipularUrl = (url) =>{
    const arraySeparado = url.split('/')
    const arrayMayusculas = arraySeparado.map(elem => elem.toUpperCase())
    return arrayMayusculas
}
console.log(manipularUrl(data.firmness.url))
//EJERCICIO 2
/**
 * Ejercicio 2 (2 pts)
Para este ejercicio, tu tarea es crear una función expresiva anónima en JavaScript que siga
estos pasos:
1. Recibe un parámetro que será el objeto general JSON cargado.
2. Convierte todos los valores del objeto en un array.
3. Filtra aquellos valores que sean de tipo objeto y que además la propiedad .url no
sea undefined
4. Devuelve el array con los objetos filtrados.
5. Itera sobre el array filtrado y extraer las URLs, devolviendo un array con las URLs
obtenidas.
    */
console.log("------------")
console.log("EJERCICIO 2")
const filtrarUrls = function (objeto) {
    const arrayValores = Object.values(objeto)
    const arrayFiltrado = arrayValores.filter(elem => typeof elem === 'object' && elem.url !== undefined)
    const conjuntoTotal = arrayFiltrado.map(elem => elem.url)
    return conjuntoTotal;
}
console.log(filtrarUrls(data))
//EJERCICIO 3
/**
 * Ejercicio 3 (2 pts)
 * Para este ejercicio, tu tarea es crear una función autoejecutable (IIFE) que:
1. Reciba por parámetro el array flavors.
2. Determine si alguno de los elementos del array tiene una potency distinta de 0 y lo
muestre por consola.
3. Calcule la suma total de todas las potencias de los elementos del array y la
muestre por consola.*/
console.log("------------")
console.log("EJERCICIO 3")
;(function (flavors) {
    const potencia = flavors.some(elem => elem.potency !== 0)
    console.log("Tiene potencia distinta de 0: "+ potencia)
    const sumaPotencias = flavors.reduce((acc, elem) => acc + elem.potency, 0)
    console.log("La suma total es: " + sumaPotencias)
})(data.flavors)

//EJERCICIO 4
/**
 * Ejercicio 4 (2 pts)
 * Para este ejercicio, tu tarea es crear una función arrow llamda filtrarNúmeros en JavaScript
que:
1. Reciba el objeto data como parámetro.
2. Convierta el objeto en un array de pares [clave, valor].
3. Filtre solo aquellos elementos cuyo valor sea de tipo Number.
4. Convierta el array filtrado nuevamente a un objeto.
5. Recorra el objeto final y muestre por consola cada clave y su valor.

 */
console.log("------------")
console.log("EJERCICIO 4")
const filtrarNumeros = (data) => {
    const arrayConvertido = Object.entries(data)
    const arrayFiltrado = arrayConvertido.filter(elem => typeof elem[1] === 'number')
    const objetoFiltrado = Object.fromEntries(arrayFiltrado)
    for (const clave in objetoFiltrado) {
        console.log(clave, objetoFiltrado[clave])
    }
}
filtrarNumeros(data)
//EJERCICIO 5
/**
 * Ejercicio 5 (1.5 pts)
Para este ejercicio, tu tarea es crear una función declarativa llamada procesarFlavors que:
1. Reciba el array flavors como parámetro.
2. Extraiga los nombres de los sabores y los guarde en un nuevo array.
3. Ordene alfabéticamente los nombres.
4. Devuelva la String resultante y la muestre por terminal.

 */
console.log("------------")
console.log("EJERCICIO 5")
const procesarFlavors = (flavors) => {
    const nombreSabores = flavors.map(elem => elem.flavor.name)
    const nombresOrdenados = nombreSabores.sort()
    console.log(nombresOrdenados.join('-> '))
}   
procesarFlavors(data.flavors)

//EJERCICIO 6
/**
 * Ejercicio 6 (1.5 pts)
Para este ejercicio, tu tarea es crear una función arrow llamada contarVocales que:
1. Reciba como parámetro el array con las claves del objeto JSON.
2. Separa cada clave en letras individuales.
3. Aplana el array resultante en una única lista de caracteres.
4. Cuente cuántas vocales (a, e, i, o, u) hay en el array final.
5. Muestre el número total de vocales por terminal.
 */
console.log("------------")
console.log("EJERCICIO 6")
const contarVocales = (claves) => {
    const claveLetras = claves.map(elem => elem.split(''));
    const letrasAplanadas = claveLetras.flat();
    const vocales = letrasAplanadas.filter(elem => 'aeiou'.includes(elem))
    console.log("El número total de vocales es: " + vocales.length)  
}
contarVocales(Object.keys(data))







