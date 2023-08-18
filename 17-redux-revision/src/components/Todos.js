import React from "react";
import { useSelector } from "react-redux";

function todos() {
  const ntodos = useSelector((state) => state.todos.todos);
  console.log(ntodos);
  return (
    <>
      <div>todos</div>
      {ntodos.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </>
  );
}

export default todos;
