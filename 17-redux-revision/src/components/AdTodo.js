// Counter.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/todo/counterSlice";

export function AdTodo() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button className="text-black" onClick={() => dispatch(decrement())}>
        -
      </button>
      <span className="text-black">{count}</span>
      <button className="text-black" onClick={() => dispatch(increment())}>
        +
      </button>
    </div>
  );
}
