import React from 'react';
import { Link } from 'react-router-dom';


export default (props) => {

    return (
        <div>
            <h2>All Products: </h2>

            {props.products?.map((product, i) =>
                <p key={i}>
                    <Link to={`product/${product._id}`}>{product.title}</Link>
                </p>
            )}
        </div>
    )
};

