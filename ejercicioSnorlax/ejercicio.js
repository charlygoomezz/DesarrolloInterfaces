import { readFileSync } from 'fs';
const dataJson = readFileSync('JavaScriptUpgrade/src/assets/snorlax.json','utf8');
const data = JSON.parse(dataJson);

//1.Crear Objeto info
const info = {
    abilities: [],
    game_indices: [],
    held_items: [],
    moves: [],
    stats: [],
};

//2.Imprimir claves por pantalla
console.log('info keys:', Object.keys(info));
console.log(data.abilities)
console.log(data.game_indices)
console.log(data.held_items)
console.log(data.moves)
console.log(data.stats)

//3.Agregar array abilities
//3.1 Acceso manual
info.abilities.push(data.abilities[0].ability.name);
info.abilities.push(data.abilities[1].ability.name);
info.abilities.push(data.abilities[2].ability.name);
console.log('Abilities (manual):',info.abilities);

//3.2 Acceso con for
/**
 * for(let i = 0; i < data.abilities.length; i++){
 *  info.abilities.push(data.abilities[i].ability.name);
 * }
 */
info.abilities = [];
for(const {ability} of data.abilities){
    info.abilities.push(ability.name);
}
console.log('Abilities (bucle):',info.abilities);

//4.Modificar abilities
let abilities = []
abilities.push(Object.values(data.abilities[0].ability));
abilities.push(Object.values(data.abilities[1].ability));
abilities.push(Object.values(data.abilities[2].ability));
info.abilities = abilities
console.log(info)

info.abilities = data.abilities.map(({ability}) => [
    ability.name,
    ability.url
]);
console.log('Abilities (name and URL):',info.abilities);

//5.Utilizar spread


info.game_indices = [...data.game_indices];
console.log('Game Indices (spread):', info.game_indices)

//6.Modificar game_indices
info.game_indices = info.game_indices.map(index =>({
    game_index: index.game_index,
    name: index.version.name,
}));
console.log('Modificar game indices:', info.game_indices)

//7.Crear un string con separadores
info.held_items = data.held_items.map(item => item.item.name).join('<->');
console.log('Held String:', info.held_items);

//8.Array con todos los movimientos
const movimientos = data.moves.map(move => move.move.name).sort();
info.moves = movimientos.slice(0,10);
console.log('10 primeros movimientos:',info.moves);

//9. Crear un objeto con claves
const stats = {
    hp: data.stats[0].base_stat,
    attack: data.stats[1].base_stat,
    defense: data.stats[2].base_stat,
    specialAttack: data.stats[3].base_stat,
    specialDefense: data.stats[4].base_stat,
    speed: data.stats[5].base_stat
};
info.stats = stats;
console.log('Stats Snorlax:', info.stats);

//10. Convertir, aplanar y elminar
info.stats = Object.values(info.stats).flat().filter(value => typeof value === 'number');
console.log('Convertido:',info.stats);

info.stats = Object.entries(info.stats).flat()
const statsNumerical = []
for(let i = 0;i < info.stats.length; i++){
    if(typeof info.stats[i] !== "string"){
        statsNumerical.push(info.stats[i])
    }
}
console.log('Convertido:',statsNumerical);


//EJERCICIO 2
//1. IIFE para mostrar habilidades
// Enunciado: Crea una función autoejecutable (IIFE) que recorra el
// array de habilidades (abilities) en el archivo JSON.
// Obtén los nombres de las habilidades y muéstralos en la consola como un array.

(function(){
    const abilities = data.abilities.map(({ability}) => ability.name);
    console.log('Habilidades (IIFE):', abilities);
})();

// 2. Callback para mostrar nombres de juegos (Revisar Tema 3.5 Pagina 8)

// Enunciado: Escribe una función llamada getGameNames que reciba un callback.
// Esta función debe recorrer el array game_indices del archivo JSON,
// obtener los nombres de las versiones del juego y pasarlos al callback,
// que debe imprimirlos en la consola como un array.



// 3. Arrow Function para calcular la altura (Revisar Tema 3.5 Pagina 11)

// Enunciado: Crea una función flecha que reciba como parámetro
// la altura de Snorlax (en decímetros) y la convierta a metros.
// Muestra el resultado en la consola.

const altura = altura => altura / 10;
console.log('Altura en metros:', altura(data.height));

// 4. Arrow Functions y Callbacks para determinar si Snorlax es "alto" (Revisar Tema 3.5 Pagina 8 y 11)

// Enunciado: Crea una función flecha que reciba 2 parametros: la altura en decimetros y
// un callback que permita la conversion a metros.
// El objetivo es determinar si es "alto". Considera que Snorlax es alto si su altura es
// mayor o igual a 2 metros. La función debe retornar true si es alto
// y false en caso contrario. Muestra el resultado en la consola.

const esAlto = (altura, callback) => {
    if(callback(altura) >= 2){
        return true;
    }else{
        return false;
    }
}
console.log('Es alto:', esAlto(data.height, altura));

// 5. HOF para filtrar objetos con rareza alta (Revisar Tema 3.5 Pagina 9)

// Enunciado: Escribe una función llamada getMoves que reciba un callback.
// Esta función debe recorrer el arreglo moves del archivo JSON y obtener
// los nombres de los movimientos. Pasa estos nombres al callback,
// que debe imprimirlos en la consola. Como ejemplo, muestra los primeros
// cinco movimientos.

const imprimir = moves => { console.log('Primeros 5 movimientos:', moves.slice(0,5)); }
const getMoves = callback => {
    const moves = []
    for(let i = 0; i < data.moves.length; i++){ 
        moves.push(data.moves[i].move.name)
    }
    callback(moves)
}
getMoves(imprimir);

// 6. HOF que retorna una función para filtrar habilidades por visibilidad (Revisar Tema 3.5 Pagina 9)

// Enunciado: Crea una función de orden superior llamada createAbilityFilter.
// Esta función debe recibir un parámetro isHidden (un booleano) y
// retornar una nueva función que, al ejecutarse,
// recorra el array de habilidades (abilities) del archivo JSON y
// devuelva un array con los nombres de las habilidades que cumplan con el
// criterio de visibilidad (is_hidden).

function createAbilityFilter(isHidden){
    return function name(){
        const array2 = []
        for(let i = 0; i < data.abilities.length;i++){
            if(data.abilities[i].is_hidden === isHidden){
                array2.push(data.abilities[i].ability.name)
            }
        }
        return array2 
    }   
} 
console.log('Habilidades visibles:', createAbilityFilter(true)())


