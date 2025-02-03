import { readFileSync } from 'fs';
import { get } from 'http';
const dataJson = readFileSync('JavaScriptUpgrade/src/assets/snorlax.json','utf8');
const data = JSON.parse(dataJson);

//EJERCICIO 2
//1. IIFE para mostrar habilidades
// Enunciado: Crea una función autoejecutable (IIFE) que recorra el
// array de habilidades (abilities) en el archivo JSON.
// Obtén los nombres de las habilidades y muéstralos en la consola como un array.
;(function (){
    const arrayNombre = []
    for(let i = 0; i < data.abilities.length; i++){
        arrayNombre.push(data.abilities[i].ability.name);
    }
    console.log(arrayNombre);
}())


// 2. Callback para mostrar nombres de juegos (Revisar Tema 3.5 Pagina 8)

// Enunciado: Escribe una función llamada getGameNames que reciba un callback.
// Esta función debe recorrer el array game_indices del archivo JSON,
// obtener los nombres de las versiones del juego y pasarlos al callback,
// que debe imprimirlos en la consola como un array.

//HOF
function getGameNames(callback){
    const nombresVersion = []
for(let i = 0; i < data.game_indices.length; i++){
    console.log(data.game_indices[i].version.name);
}
callback(nombresVersion)
}
//Callback
const mostrarVersion = (elementos) =>{
    console.log(elementos)
}
getGameNames(mostrarVersion)

// 3. Arrow Function para calcular la altura (Revisar Tema 3.5 Pagina 11)

// Enunciado: Crea una función flecha que reciba como parámetro
// la altura de Snorlax (en decímetros) y la convierta a metros.
// Muestra el resultado en la consola.
const conversionAltura = altura => altura / 10
console.log("Altura Snorlax :" + conversionAltura(data.height) + "m")


// 4. Arrow Functions y Callbacks para determinar si Snorlax es "alto" (Revisar Tema 3.5 Pagina 8 y 11)

// Enunciado: Crea una función flecha que reciba 2 parametros: la altura en decimetros y
// un callback que permita la conversion a metros.
// El objetivo es determinar si es "alto". Considera que Snorlax es alto si su altura es
// mayor o igual a 2 metros. La función debe retornar true si es alto
// y false en caso contrario. Muestra el resultado en la consola.
const esAlto = (altura, callback) => {return conversionAltura(altura) >= 2 ? true : false}
console.log("Es alto? " + esAlto(data.height, conversionAltura)) 

// 5. HOF para filtrar objetos con rareza alta (Revisar Tema 3.5 Pagina 9)
// Enunciado: Escribe una función llamada getMoves que reciba un callback.
// Esta función debe recorrer el arreglo moves del archivo JSON y obtener
// los nombres de los movimientos. Pasa estos nombres al callback,
// que debe imprimirlos en la consola. Como ejemplo, muestra los primeros
// cinco movimientos.

function getMoves(callback) {
    const nombreMovimientos = []
    for(let i =0; i < data.moves.length ; i++){
        nombreMovimientos.push(data.moves[i].move.name)
    }
    callback(nombreMovimientos)
}

const mostrarMovimientos = (nombres) =>{ console.log(nombres.slice(0,5)) } //Callback
getMoves(mostrarMovimientos)


// 6. HOF que retorna una función para filtrar habilidades por visibilidad (Revisar Tema 3.5 Pagina 9)
// Enunciado: Crea una función de orden superior llamada createAbilityFilter.
// Esta función debe recibir un parámetro isHidden (un booleano) y
// retornar una nueva función que, al ejecutarse,
// recorra el array de habilidades (abilities) del archivo JSON y
// devuelva un array con los nombres de las habilidades que cumplan con el
// criterio de visibilidad (is_hidden).

function createAbilityFilter(isHidden){
    return function(){
    const habilidadesFiltradas = []
    for(let i = 0; i < data.abilities.length; i++){
        if(data.abilities[i].is_hidden === isHidden){
            habilidadesFiltradas.push(data.abilities[i].ability.name)
        }
    }
    return habilidadesFiltradas
    }
}
console.log(createAbilityFilter(true)()) //HOF

// Usa for...in para recorrer las propiedades del objeto principal
// y muestra su tipo de dato. Usa for...of para iterar sobre los índices de juegos
// (game_indices) y mostrar los nombres de las versiones.
//For...in
console.log('For...in');
console.log("-----------------");
for(const key in data){
    console.log(`${key}: ${typeof data[key]}`);
}
console.log("-----------------");
//For...of
console.log('For...of');
for(const {version} of data.game_indices){
    console.log(version.name);
}
console.log("-----------------");

// Obtén un array con los nombres de todas las habilidades (abilities) del Pokémon,
// añadiendo el prefijo "Ability: " a cada nombre. (Posible requisito: Map)
const abilities = data.abilities.map(({ability}) => `Ability: ${ability.name}`);
console.log(abilities);

// Filtra los movimientos (moves) que se pueden aprender en el nivel inicial (level_learned_at: 0).
// Devuelve un array con los nombres de estos movimientos. (Posible requisito: Filter, Some, Map)
//console.log(data.moves[0].version_group_details.some(element => element.levevel_learned_at === 0))
const movesFilter = (data.moves.filter(callback => callback.version_group_details.some(element => element.levevel_learned_at === 0)))
console.log(movesFilter.map(elem => elem.move.name))

// Encuentra la habilidad que tenga is_hidden igual a true y devuelve su nombre.
// Si no existe, devuelve un mensaje indicando que no hay habilidades ocultas.
const abilitiesFilter = (data.abilities.filter(callback => callback.is_hidden === true))
console.log(abilitiesFilter.length ? abilitiesFilter.map(elem => elem.ability.name) : "No hay habilidades que no sean ocultas")

// Calcula el número total de juegos (game_indices) en los que aparece este Pokémon.
// (Posible requisito: Reduce)


// Recorre el array de held_items y muestra por consola el nombre de cada ítem
// junto con las versiones en las que está disponible. El output tiene que tener el
// formato Item: <Nombre del Item>, Versiones: <Nombres de las versiones>
// (Posible requisito: forEach, Map)



// Verifica si todas las habilidades (abilities) no son ocultas (is_hidden).
// Además, verifica si al menos un movimiento tiene el método de aprendizaje "machine".
// (Posible requisito: every, some)

// Convierte el array de habilidades (abilities) en un objeto donde las claves
// sean los nombres de las habilidades y los valores indiquen si son ocultas (is_hidden).
// (Posible requisito: Object.fromEntries)


// Crea una función autoejecutable que recorra los movimientos (moves)
// y retorne un array con objetos que contengan el nombre del movimiento
// y su primer método de aprendizaje (move_learn_method).
// (Posible requisito: Funcion autejecutable, map, )

// Usa for...in para recorrer las propiedades del objeto principal
// y muestra su tipo de dato. Usa for...of para iterar sobre los índices de juegos
// (game_indices) y mostrar los nombres de las versiones.
//For...in

//For...of



// Obtén un array con los nombres de todas las habilidades (abilities) del Pokémon,
// añadiendo el prefijo "Ability: " a cada nombre. (Posible requisito: Map)


// Filtra los movimientos (moves) que se pueden aprender en el nivel inicial (level_learned_at: 0).
// Devuelve un array con los nombres de estos movimientos. (Posible requisito: Filter, Some, Map)


// Encuentra la habilidad que tenga is_hidden igual a true y devuelve su nombre.
// Si no existe, devuelve un mensaje indicando que no hay habilidades ocultas.


// Calcula el número total de juegos (game_indices) en los que aparece este Pokémon.
// (Posible requisito: Reduce)


// Recorre el array de held_items y muestra por consola el nombre de cada ítem
// junto con las versiones en las que está disponible. El output tiene que tener el
// formato Item: <Nombre del Item>, Versiones: <Nombres de las versiones>
// (Posible requisito: forEach, Map)



// Verifica si todas las habilidades (abilities) no son ocultas (is_hidden).
// Además, verifica si al menos un movimiento tiene el método de aprendizaje "machine".
// (Posible requisito: every, some)

// Convierte el array de habilidades (abilities) en un objeto donde las claves
// sean los nombres de las habilidades y los valores indiquen si son ocultas (is_hidden).
// (Posible requisito: Object.fromEntries)


// Crea una función autoejecutable que recorra los movimientos (moves)
// y retorne un array con objetos que contengan el nombre del movimiento
// y su primer método de aprendizaje (move_learn_method).
// (Posible requisito: Funcion autejecutable, map, )

    



