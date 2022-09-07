import { useState, useEffect } from 'react';

const GetPokemon = (props) => {

    const [pokemon, setPokemon] = useState([]);


    const clickHandler = (event) => {
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => response.json())
        .then(response => setPokemon(response.results))
        .catch(err => console.log(err))
    }
 

    return (
        <div>
            <button onClick={clickHandler}> Fetch Pokemon </button>
            
            {pokemon && pokemon.map((poke, i) => {
                return (<h1 key={i}>{poke.name}</h1>)
            })}
        </div>

    )
   
}

export default GetPokemon;
