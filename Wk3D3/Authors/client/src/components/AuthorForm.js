import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default (props) => {

    const [name, setName] = useState("");

    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    // old way of form submission -not refactored
    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/author/new', {
            name
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

            <h4>Add a new author:</h4>
            <form onSubmit={onSubmitHandler}>
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
};