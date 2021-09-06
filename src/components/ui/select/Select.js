import './Select.css';

const Select = (props) => {

    const handleSelect = (e) => {
        props.callback(e.target.value);
    }

    return(
        <select onChange={handleSelect}>
            {
                props.options.map((el, index) => {
                    return (
                        <option 
                            value={el}
                            key={index}
                        >
                            {el}
                        </option>
                    )
                })
            }
        </select>
    )
}

export default Select;