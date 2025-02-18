import { readFileSync } from 'fs';
const dataJson = readFileSync('JavaScriptUpgrade/src/assets/snorlax.json','utf8');
const data = JSON.parse(dataJson);

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
const moves = data.moves.filter(move => move.version_group_details.some(detail => detail.level_learned_at === 0)).map(move => move.move.name);
console.log(moves);

// Encuentra la habilidad que tenga is_hidden igual a true y devuelve su nombre.
// Si no existe, devuelve un mensaje indicando que no hay habilidades ocultas.
const hiddenAbility = data.abilities.find(({is_hidden}) => is_hidden);
console.log(hiddenAbility ? hiddenAbility.ability.name : 'No hay habilidades ocultas');

// Calcula el número total de juegos (game_indices) en los que aparece este Pokémon.
// (Posible requisito: Reduce)
const totalGames = data.game_indices.reduce(total => total + 1, 0);
console.log(totalGames);

// Recorre el array de held_items y muestra por consola el nombre de cada ítem
// junto con las versiones en las que está disponible. El output tiene que tener el
// formato Item: <Nombre del Item>, Versiones: <Nombres de las versiones>
// (Posible requisito: forEach, Map)
data.held_items.forEach(item => {
    const versions = item.version_details.map(detail => detail.version.name).join(', ');
    console.log(`Item: ${item.item.name}, Versiones: ${versions}`);
});


// Verifica si todas las habilidades (abilities) no son ocultas (is_hidden).
// Además, verifica si al menos un movimiento tiene el método de aprendizaje "machine".
// (Posible requisito: every, some)
const allAbilitiesVisible = data.abilities.every(({is_hidden}) => !is_hidden);
console.log(allAbilitiesVisible);
// Convierte el array de habilidades (abilities) en un objeto donde las claves
// sean los nombres de las habilidades y los valores indiquen si son ocultas (is_hidden).
// (Posible requisito: Object.fromEntries)
const abilitiesObject = Object.fromEntries(data.abilities.map(({ability}) => [ability.name, ability.is_hidden]));
console.log(abilitiesObject);

// Crea una función autoejecutable que recorra los movimientos (moves)
// y retorne un array con objetos que contengan el nombre del movimiento
// y su primer método de aprendizaje (move_learn_method).
// (Posible requisito: Funcion autejecutable, map, )
const movesWithMethod = (function(){
    return data.moves.map(move => {
        const {name} = move.move;
        const method = move.version_group_details[0].move_learn_method.name;
        return {name, method};
    });
})();