import { useState } from 'react';


const UserForm = (props) => {
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    // validations
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);


    const createUser = (e) => {
        // prevents form from refreshing the page after submission
        e.preventDefault();

        // short hand to create newUser object with form data
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser)
        
        // clear the state after submitting the form
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("")
    }

    // ------------------------ error validation functions -----------------------
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First Name is required");
        } else if(e.target.value.length < 2) {
            setFirstNameError("First Name must be atleast 2 characters long! ");
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last Name is required");
        } else if(e.target.value.length < 2) {
            setLastNameError("Last Name must be atleast 2 characters long! ");
        } else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required");
        } else if(e.target.value.length < 5) {
            setEmailError("Email must be atleast 5 characters long! ");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be atleast 8 characters long! ");
        } else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length < 1) {
            setConfirmPasswordError("Password must be typed twice");
        } else if(e.target.value.length < 8) {
            setConfirmPasswordError("Password must be atleast 8 characters long! ");
        } else if(e.target.value.length !== {password}) {
            setConfirmPasswordError("Passwords must match! ")
        } else {
            setConfirmPasswordError("");
        }
    }


    // -------------------- JSX return ----------------------------------------

    return (
        <div className="container">
            <form onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={handleFirstName} value={firstName}></input>
                    {/* ternary operator if true run the error function if false empty string */}
                    {
                        firstNameError ?
                        <p style={{color: 'red'}}>{firstNameError}</p> :
                        ""
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={handleLastName} value={lastName}></input>
                    {
                        lastNameError ?
                        <p style={{color: 'red'}}>{lastNameError}</p> :
                        ""
                    }
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" onChange={handleEmail} value={email}></input>
                    {
                        emailError ?
                        <p style={{color: 'red'}}>{emailError}</p> :
                        ""
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={handlePassword} value={password}></input>
                    {
                        passwordError ?
                        <p style={{color: 'red'}}>{passwordError}</p> :
                        ""
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ handleConfirmPassword } value={confirmPassword}></input>
                    {
                        confirmPasswordError ?
                        <p style={{color: 'red'}}>{confirmPasswordError}</p> :
                        ""
                    }
                </div>
                <button>Submit</button>
            </form>

            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </div>


    )
}




export default UserForm;