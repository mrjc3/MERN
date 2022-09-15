import axios from 'axios';

export default (props) => {
    const {removeFromDom, authorId} = props;
   
    
    const deleteAuthor = () => {
        
        axios.delete(`http://localhost:8000/api/author/${authorId}`)
        .then(res => {
            removeFromDom(authorId);
        })
        .catch(err => console.error(err));
    }

    return (
        <button className="btn btn-danger" onClick={deleteAuthor}>Delete</button>
    )
}