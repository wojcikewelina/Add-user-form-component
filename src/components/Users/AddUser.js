import React, { useState } from 'react';
import "./AddUser.css";
import Card from '../UI/Card'
import Button from '../UI/Button';
import UserAlert from './UserAlert';


const AddUser = (props) => {

    const [enteredUserName, setEnteredUserName] = useState("");
    const [enteredUserAge, setEnteredUserAge] = useState("");
    const [alertVisibility, setAlertVisibility] = useState(false);
    const [alertContent, setAlertContent] = useState("")

    const userData = {
        name: enteredUserName,
        age: enteredUserAge,
    }


    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setAlertContent("Inputs can't be empty")
            setAlertVisibility(true);
            return;
        };
        if (+enteredUserAge < 1) {
            setAlertContent("Age value should be at least 1 year")
            setAlertVisibility(true);
            return;
        };
        console.log(enteredUserAge, enteredUserName);
        setEnteredUserName("");
        setEnteredUserAge("");
        props.onSubmitUser(userData);
    }


    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value)
    }
    const userAgeChangeHandler = (event) => {
        setEnteredUserAge(event.target.value);
    }

    const alertVisibilityHandler = (enteredAlertStatus) => {
        setAlertVisibility(enteredAlertStatus);
    }

    return (
        <Card className="formContainer">
            {alertVisibility === true ?
                <UserAlert onClickAlertButton={alertVisibilityHandler} alertContent={alertContent} />
                : ""}
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input
                    id="username" type="text"
                    onChange={userNameChangeHandler}
                    value={enteredUserName} />
                <label htmlFor='age'>Age (years)</label>
                <input
                    id="age"
                    type="number"
                    onChange={userAgeChangeHandler} value={enteredUserAge} />
                <Button type="submit" className="submitButton">Add user</Button>
            </form>
        </Card>
    )
}

export default AddUser;