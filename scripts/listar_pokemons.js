import { Pokemon } from '../models/pokemons.js';
import axios from 'axios';
const url = 'https://profbruno-ufc-qx.github.io/web-development/assets/downloads/pokedex-light.json';


export function pokelist(){

    let pokeslist = [];
    axios.get(url).then(response =>{
        const pokemonsjson = response.data;
        // console.log(pokemonsjson); 
        
        for(let i = 0; i < 5; i++){
            pokeslist.push(new Pokemon(pokemonsjson.pokemons[i].id, pokemonsjson.pokemons[i].name, pokemonsjson.pokemons[i].stats[0].base_stat, 
                pokemonsjson.pokemons[i].stats[1].base_stat, pokemonsjson.pokemons[i].stats[2].base_stat, pokemonsjson.pokemons[i].stats[3].base_stat, 
                pokemonsjson.pokemons[i].stats[4].base_stat, pokemonsjson.pokemons[i].stats[5].base_stat));
        }
        //console.log(pokeslist);
        console.table(pokeslist);
    });
    
    //console.log(pokeslist);
}

//this.id = id;
//this.nome = nome;
//this.pvMax = pvMax;
//this.atque = ataque;
//this.defesa = defesa;
//this.atkEsp = atkEsp;
//this.defEsp = defEsp;
//this.velocidade = velocidade;