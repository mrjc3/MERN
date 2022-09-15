import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default (props) => {

    const {removeFromDom, products} = props;

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/product/${productId}`)
        .then(res => {
            removeFromDom(productId)
        })
        .catch(err => console.error(err));
    }

    return (
        <div>
            <h2>All Products: </h2>

            {products?.map((product, i) =>
                <p key={i}>
                    <Link to={`product/${product._id}`}>{product.title}</Link>
                    |
                    <button onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
                </p>
            )}
        </div>
    )
};
