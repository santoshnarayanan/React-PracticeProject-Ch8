import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import {useState, useRef} from "react";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    //maintain state for error
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault(); // prevent postback
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        //Validation if blank or age entered is less than 1
        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Enter valid name and age'
            });
            return;
        }
        //conversion of string to number (javascript)
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Enter valid age and should be greater than zero'
            });
            return;
        }
        //lifting State to App.Js on click on every Button
        props.onAddUser(enteredName, enteredUserAge);
        //Clear values after user enter values in text box
        nameInputRef.current.value='';
        ageInputRef.current.value='';
    };

    const errorHandler = () => {
        setError(null);
    };

    //Card is composition
    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" ref={nameInputRef}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" ref={ageInputRef}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;