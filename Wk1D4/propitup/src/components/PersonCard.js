import { Component } from "react";

class PersonCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            age: this.props.age,
        };
    }
    
    incrementAge = () => {
        const {age} = this.state;
        this.setState({age: age + 1});
    }

    render() {
        const {firstName, lastName, hairColor} = this.props;
        const { age } = this.state;
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <h4>Age: {age}</h4>
                <h4>Hair Color: {hairColor}</h4>
                <button onClick={this.incrementAge}>Birthday Button for {firstName} {lastName}</button>
            </div>
        )
    }
};

export default PersonCard;