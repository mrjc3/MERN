import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link, useNavigate} from 'react-router-dom';

export default () => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    // gets the data and stores into state to display in the update form
    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(res => {
                setName(res.data.name);
            })
    }, []);

    // takes the data from form to re add it to the db
    const updateAuthor = e => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/author/${id}`, {
            name,
        })
            .then(res => {
                console.log(res)
                // props.addNewAuthor(res.data);
                navigate("/");
            })
            .catch(err => {

                const errorResponse = err.response.data.errors; // get errors from res which is an object
                const errorArr = []; // temp array to add errors too

                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message) // loop thru error object to add only the message to the array
                }

                setErrors(errorArr); // set errors in state
            })
    }

    return (
        <div>
            <h1>Favorite Authors</h1>

            <Link to="/">Home</Link>

            <h4>Edit this author:</h4>
            <form onSubmit={updateAuthor}>
                {errors?.map((err, i) => <p key={i}>{err}</p>)}

                <p>
                    <label>Author Name</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name}></input>
                </p>

                <Link to="/" className='btn btn-primary'>Cancel</Link>
                |
                <button className='btn btn-primary'>Submit</button>

            </form>
        </div>
    )
}