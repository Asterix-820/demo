import TodoItem from "./TodoItem"

const TodosList = () => {
  return (
    <div className="TodosList">
        <h1>List of Todos</h1>
        <div className="list">
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
         <TodoItem/>
        </div>
       
        </div>
  )
}

export default TodosList