import { useParams } from "react-router-dom";

const Number = (props) => {
    const {number} = useParams();


    const Decision = () => {
        if (isNaN(number)) {
            return (<h1>The word is: {number}</h1>)
        } else {
            return (<h1>The number is {number}</h1>)
        }
    }
    return (
        // <h1>The number is: {number}</h1>
        <div>
            {Decision()}
        </div>
    );
}

export default Number;