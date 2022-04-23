import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import {useState} from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    //maintain states for username and age
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    //maintain state for error
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault(); // prevent postback

        //Validation if blank or age entered is less than 1
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title:'Invalid input',
                message:'Enter valid name and age'
            });
            return;
        }
        //conversion of string to number (javascript)
        if (+enteredAge < 1) {
            setError({
                title:'Invalid age',
                message:'Enter valid age and should be greater than zero'
            });
            return;
        }

        props.onAddUser(enteredUserName, enteredAge); //lifting State to App.Js on click on every Button

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

    const errorHandler = () =>{
        setError(null);
    };

    //Card is composition
    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUserName} onChange={usernameChangeHandler}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;