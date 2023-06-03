import Newsletter from "./Newsletter"
import img from "../img/todo-2.jpeg"

const Header = () => {
  return (
    <header>
      <h1>Todos</h1>
      <div>
        <img
          src={img}
          alt="Todos-image"
        />
      </div>
      <p>Items will persist in the Browser's local storage</p>
    </header>

  )
}

export default Header