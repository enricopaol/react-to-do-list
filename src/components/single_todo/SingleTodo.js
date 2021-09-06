import './SingleTodo.css';

import Button from '../ui/button/Button';

const SingleTodo = (props) => {

    const handleElimination = () => {
        props.callbacks[0](props.index, props.items);
    }

    const handleMovingTodo = () => {
        props.callbacks[1](props.index, props.items);
    }

    return (
        <div className="single-todo">

            <div>
                <div className="text">
                    {props.text}
                </div>

                <div className="status">
                    {props.status}
                </div>
            </div>

            <div className='buttons'>
                <div className="delete">
                    <Button
                        label='elimina'
                        classCss='delete-btn'
                        callback={handleElimination}
                    />
                </div>

                {
                    props.status !== 'Eseguito' &&
                    <div className="move">
                        <Button
                            label="muovi avanti"                            
                            callback={handleMovingTodo}
                        />
                    </div>
                }
            </div>

        </div>
    )
}

export default SingleTodo;