import Header from "./components/header";
import Navbar from "./components/Navbar";
import TodosLogic from "./components/TodosLogic";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <TodosLogic />
    </div>
  );
}

export default App;
