import classes from './Card.module.css';

//This component is composition where it will get form input
const Card = props => {
    return (
        //adding class from two sources 1)classes and 2) props
        <div className={`${classes.card} ${props.className}`}>{props.children}</div>
    );
};

export default Card;