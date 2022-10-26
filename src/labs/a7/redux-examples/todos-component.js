import React, {useState} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import {addTodo}
    from "./reducers/todos-reducer";

const Todos = () => {
    //retrieve todos from reducer state and assign to
    // local todos constant
    const todos
        = useSelector(state => state.todos);
    const [todo, setTodo] = useState({do: ''});
    const todoChangeHandler = (event) => {
        const doValue = event.target.value;
        const newTodo = {
            do: doValue
        };
        setTodo(newTodo);
    }
    const dispatch = useDispatch();
    const createTodoClickHandler = () => {
        dispatch(addTodo(todo))
    };

    return (
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    <input
                        onChange={todoChangeHandler}
                        value={todo.do}
                        className="form-control"/>
                </li>
                <li className="list-group-item">
                    <button onClick={createTodoClickHandler}
                            className="btn btn-primary w-25
                      float-end">
                        Create
                    </button>
                    <input onChange={todoChangeHandler}
                           value={todo.do}
                           className="form-control w-75"/>
                </li>
            </ul>
        </>
    );
};
export default Todos;