import todoContext from "./TodoContext"
const TodoProvider = ({children}) =>{

    return (
        <todoContext.Provider value={"todos"}>
            {children}
        </todoContext.Provider>

    )

}

export default TodoProvider