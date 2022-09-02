import { Component } from "react";

class PersonCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {firstName, lastName, age, hairColor} = this.props;
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <h4>Age: {age}</h4>
                <h4>Hair Color: {hairColor}</h4>
            </div>
        )
    }
};

export default PersonCard;