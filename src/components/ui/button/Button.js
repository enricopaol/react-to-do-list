import './Button.css';

const Button = (props) => {

    const handleButton = () => {
        props.callback();
    }

    return (
        <button
         className={`button ${props.classCss}`}
         onClick={handleButton}
        >
            {props.label}
        </button>
    )
}

export default Button;