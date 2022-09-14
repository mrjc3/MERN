import {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

export default () => {
    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    // gets the data and stores into state to display in the update form
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res => {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        })
    }, []);

    // takes the data from form to re add it to the db
    const updateProduct = e => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/product/${id}`, {
            title,
            price,
            description
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={updateProduct}>
                
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
        </div>
    )
}
