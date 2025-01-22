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
