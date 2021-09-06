import SingleTodo from '../single_todo/SingleTodo';
import './List.css';

const List = (props) => {     

    const handleElimination = (index, items) => {
        props.callbacks[0](index, items);
    }

    const handleMoving = (index, items) => {
        props.callbacks[1](index, items)
    }
      
    return (

        <div className="list-items">

            <h2>{props.title}</h2>

            {
                props.items.length > 0 ?

                props.items.map((el, index) => {
                    return (
                        <SingleTodo
                            text={el.text}
                            status={el.status}
                            key={index}   
                            index={index} 
                            callbacks={[handleElimination, handleMoving]}
                            items={props.items}                                           
                        />
                    )
                })

                : <div className="empty">Non ci sono task {props.title.toLowerCase()}</div>
            }

        </div>
    )
}

export default List;