import { readFileSync } from 'fs';
const dataJson = readFileSync('JavaScriptUpgrade/src/assets/snorlax.json','utf8');
const data = JSON.parse(dataJson);
// Usa for...in para recorrer las propiedades del objeto principal
// y muestra su tipo de dato. Usa for...of para iterar sobre los índices de juegos
// (game_indices) y mostrar los nombres de las versiones.
//For...in
for(const key in data){
    console.log(key)
}
console.log("----------------")
//For...of
for(const {version} of data.game_indices){
    console.log(version.name)
}

// Obtén un array con los nombres de todas las habilidades (abilities) del Pokémon,
// añadiendo el prefijo "Ability: " a cada nombre. (Posible requisito: Map)
const nombres = data.abilities.map(elem => elem.ability.name)
console.log(nombres)

// Filtra los movimientos (moves) que se pueden aprender en el nivel inicial (level_learned_at: 0).
// Devuelve un array con los nombres de estos movimientos. (Posible requisito: Filter, Some, Map)
const movimientos = data.moves.filter(elem => elem.version_group_details.some(detail => detail.level_learned_at === 0)).map(move => move.move.name)
console.log(movimientos)

// Encuentra la habilidad que tenga is_hidden igual a true y devuelve su nombre.
// Si no existe, devuelve un mensaje indicando que no hay habilidades ocultas.
const isHidden = data.abilities.filter(elem => elem.is_hidden)
console.log(isHidden.length ? isHidden.map(elem => elem.ability.name) : "No hay habilidades")

// Calcula el número total de juegos (game_indices) en los que aparece este Pokémon.
// (Posible requisito: Reduce)
const totalGames = data.game_indices.length
console.log(totalGames)

// Recorre el array de held_items y muestra por consola el nombre de cada ítem
// junto con las versiones en las que está disponible. El output tiene que tener el
// formato Item: <Nombre del Item>, Versiones: <Nombres de las versiones>
// (Posible requisito: forEach, Map)

data.held_items.forEach(element => {
    const versiones = element.version_details.map(elem => elem.version.name).join(',')
    console.log(`Item: ${element.item.name}, Version: ${versiones}`)
});



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
