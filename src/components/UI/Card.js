import classes from './Card.module.css';

const Card = props => {
    return (
        //adding class from two sources 1)classes and 2) props
        <div className={`${classes.card} ${props.className}`}>{props.children}</div>
    );
};

export default Card;