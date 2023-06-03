import InputTodo from "./InputTodo"
import Newsletter from "./Newsletter"
import TodosList from "./TodosList"


const TodosLogic = () => {
  return (
    <div className="Todoslogic">
        <InputTodo/>
        <TodosList/>
        <Newsletter/>
    </div>
  )
}

export default TodosLogic