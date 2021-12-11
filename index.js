const fs = require('fs');

// const user = require('./user.json');
// console.log(user);
// fs.readFile('./pokedex.json', 'utf-8', (error, data)=>{
//     const user = JSON.parse(data); 
//     console.log(user.forms);
// });

try {
    const data = fs.readFileSync('./pokedex.json', 'utf-8');
    const user = JSON.parse(data);
    // console.log(user.pokemons[0].id ,user.pokemons[0].name, user.pokemons[0].stats, user.pokemons[0].sprites.front_default);
    // console.log(user.pokemons[1].id ,user.pokemons[1].name, user.pokemons[1].stats, user.pokemons[1].sprites.front_default);
    // console.log(user.pokemons[2].id ,user.pokemons[2].name, user.pokemons[2].stats, user.pokemons[2].sprites.front_default);
    // console.log(user.pokemons[3].id ,user.pokemons[3].name, user.pokemons[3].stats, user.pokemons[3].sprites.front_default);
    // console.log(user.pokemons[4].id ,user.pokemons[4].name, user.pokemons[4].stats, user.pokemons[4].sprites.front_default);
    const img0 = user.pokemons[0].sprites.front_default;
    const img1 = user.pokemons[1].sprites.front_default;
    const img2 = user.pokemons[2].sprites.front_default;
    const img3 = user.pokemons[3].sprites.front_default;
    const img4 = user.pokemons[4].sprites.front_default;
    console.log(img0);
    console.log(img1);
    console.log(img2);
    console.log(img3);
    console.log(img4);

} catch (e) {
    console.log(e);
}