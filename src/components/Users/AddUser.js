import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import {useState} from "react";

const AddUser = (props) => {
    //maintain states for username and age
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault(); // prevent postback

        //Validation if blank or age entered is less than 1
        if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){ return; }
        //conversion of string to number (javascript)
        if(+enteredAge < 1){ return;}

        console.log(enteredUserName, enteredAge);

        //Reset state to empty string after clicking on button
        setEnteredUserName('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (event) => {
        //Capture user input
        setEnteredUserName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        //Capture user input
        setEnteredAge(event.target.value);
    };

        //Card is composition
    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={enteredUserName} onChange={usernameChangeHandler}/>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;