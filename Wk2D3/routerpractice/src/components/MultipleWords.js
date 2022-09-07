import { useParams } from 'react-router-dom';

const MultipleWords = (props) => {
    const {word, wordColor, backgroundColor} = useParams();

    return (
        <div style={{backgroundColor: backgroundColor}}>
            <h1 style={{color: wordColor}}>{word}</h1>
        </div>
    );
}

export default MultipleWords;