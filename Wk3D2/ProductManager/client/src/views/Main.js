import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';
import {useState, useEffect} from 'react';

export default () => {

    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {setProducts(res.data); setLoaded(true);})
            .catch(err => console.log(err))
    }, []);

    const addNewProduct = (productFromForm) => {
        setProducts([...products, productFromForm])
    }

    return (
        <div>
            <ProductForm addNewProduct={addNewProduct}/>
            <hr />
            {loaded && <ProductList products={products}/>}
        </div>
    )
};