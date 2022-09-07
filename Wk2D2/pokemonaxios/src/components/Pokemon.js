import { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = (props) => {

    const [pokemonList, setPokemonList] = useState([]);

    const fetchPokemon = (event) => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(response => { setPokemonList(response.data.results)
                console.log(response.data.results)
    })
    
}

    

return (
    <div>
        <button onClick={fetchPokemon}>Fetch Pokemon</button>
        
        {pokemonList && pokemonList.map((poke, i) => {
                return (<h1 key={i}>{poke.name}</h1>)
            })}
    </div>
    
)
}

export default Pokemon;