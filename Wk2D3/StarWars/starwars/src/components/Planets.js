import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import obiwan from '../img/obiwankenobi.jpeg';

const Planets = (props) => {

    const [planet, setPlanet] = useState("");

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => {
                setPlanet(response.data)
            })
    }, [id])
    return (
        planet ?
            <div>
                <h1>{planet.name}</h1>
                <p>Climate: {planet.climate}</p>
                <p>Terrain: {planet.terrain}</p>
                <p>Surface Water: {planet.surface_water}</p>
                <p>Population: {planet.population}</p>
            </div>
            :
            <div>
                <h3>These arent the droids youre looking for</h3>
                <img src={obiwan} />
            </div>

    )
}

export default Planets;