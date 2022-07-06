import { useContext, useEffect } from "react";
import TodoContext from "../contex/TodoContext";

const Todos = () => {
    const todoContext = useContext(TodoContext);
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(data => {
            todoContext.dispatch({type:'SET_TODOS' , payload: data})
        })
    }, []);

    return (
        <h1>Todos Page </h1>
    )
}

export default Todos;