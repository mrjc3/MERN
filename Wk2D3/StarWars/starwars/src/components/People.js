import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import obiwan from '../img/obiwankenobi.jpeg';


const People = (props) => {

    const [person, setPerson] = useState({});
    const { id } = useParams();


    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                setPerson(response.data)

            })
    }, [id])
    // figure out the catch error
    return (
        person ?
            <div>
                <h1>{person.name}</h1>
                <p><strong>Height:</strong> {person.height} cm</p>
                <p><strong>Mass:</strong> {person.mass} kg</p>
                <p><strong>Hair Color:</strong> {person.hair_color}</p>
                <p><strong>Skin Color:</strong> {person.skin_color}</p>
            </div>
            :
            <div>
                <h3>These arent the droids youre looking for</h3>
                <img src={obiwan} alt="obi wan kenobi" />
            </div>

    )
}




export default People;