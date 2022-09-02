import React from "react";
import {useState} from "react";
import style from "./PersonCardFunctionalComponent.module.css"

const PersonCardFunctionalComponent = (props) => {
    const {firstName, lastName, age, hairColor} = props.person;
    const [ageCount, setAgeCount] = useState(age);

    return(
        <div className={style.cardStyle}>
            <h1>{lastName}, {firstName}</h1>
            <h4>Age: {ageCount}</h4>
            <h4>Hair Color: {hairColor}</h4>
            <button onClick={(e) => {setAgeCount(ageCount+1)}}>Birthday Button for {firstName} {lastName}</button>
        </div>
    )
}

export default PersonCardFunctionalComponent;