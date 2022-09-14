import { useState, useEffect } from 'react';
import axios from 'axios';

export default (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");



    // Submission of form
    const onSubmitHandler = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/product/new', {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res)
                props.addNewProduct(res.data);
            })
            .catch(err => console.log(err))
    }
    
    
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}></input>
            </p>

            <p>
                <label>Price</label>
                <input type="text" onChange={(e) => setPrice(e.target.value)} value={price}></input>
            </p>

            <p>
                <label>Description</label>
                <textarea onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
            </p>

            <input type="submit" />

        </form>
    )
}