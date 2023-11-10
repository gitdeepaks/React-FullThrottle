import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todo";

function App() {
  return (
    <>
      <h1 className="text-green-600 text-3xl font-bold">
        Learn About Redux Tool kit Phase 2
      </h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
