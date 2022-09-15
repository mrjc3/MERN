import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';

export default () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then(res => {setAuthors(res.data); setLoaded(true);})
        .catch(err => console.log(err))
    }, []);


    const addNewAuthor = (authorFromData) => {
        setAuthors([...authors, authorFromData])
    }

    const removeFromDom = (authorId) => {
        setAuthors(authors.filter(author => author._id !== authorId));
    }

    const authorList = authors.map ((author, i) =>
        <tr key={i}>
            <td scope="col">{author.name}</td>
            <td scope="col">
                <Link to={`/edit/${author._id}`} className="btn btn-warning">Edit</Link>| <DeleteButton authorId={author._id} removeFromDom={removeFromDom}/>
                
            </td>
        </tr>
    );

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to="/new">Add New Author</Link>
            <h3>We have quotes by:</h3>
            {
                loaded?
                <table className='table'>
                    <thead>
                        <tr>
                            <td scope="col">Author</td>
                            <td scope="col">Actions available</td>
                        </tr>
                    </thead>
                    <tbody>
                        { authorList }
                    </tbody>
                </table>
                :
                <p></p>
            }
        </div>
    )
}