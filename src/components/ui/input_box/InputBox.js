import './InputBox.css';

const InputBox = (props) => {

    const handleInputBox = (e) => {
        props.callback(e.target.value);
    }

    return (
        <input 
            className="input-box" 
            type={props.type} 
            placeholder={props.placeholder}
            value={props.value}
            onChange={handleInputBox}
        />
    )
}

export default InputBox