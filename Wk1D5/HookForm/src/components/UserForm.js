import { useState } from 'react';


const UserForm = (props) => {
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


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

    return (
        <div className='container'>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName}></input>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName}></input>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}></input>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ (e) => setConfirmPassword(e.target.value)} value={confirmPassword}></input>
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