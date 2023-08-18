import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AdTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler}>
      <input
        className="bg-black-200"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AdTodo;
