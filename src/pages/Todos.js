import { useContext } from "react"
import TodoContext from "../contex/TodoContext"



const Todos = () => {

const todoContext = useContext (TodoContext)

    return (
        <h1>todos {todoContext}</h1>
    )
}
export default Todos;