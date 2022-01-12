const {Pokeapi} = require('pokeapi')

const p = new Pokeapi('123456');

(async()=> {
    try {
        const data = await p.getPokemonById(1);
        console.log(data)
    }catch (err) {
        console.log(err)
    } 
})()
