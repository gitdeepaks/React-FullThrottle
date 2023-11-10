import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../assets/features/todo/tosoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleUpdateTodo = (todo) => {
    const updatedText = prompt("Update Todo:", todo.text);
    if (!updatedText || updatedText === todo.text) return;
    dispatch(updateTodo({ id: todo.id, text: updatedText }));
  };

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className="text-white">{todo.text}</div>
            <div>
              <button
                onClick={() => handleUpdateTodo(todo)}
                className="mr-2 text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
              >
                Update
              </button>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
