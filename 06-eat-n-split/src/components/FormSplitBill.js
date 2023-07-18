import React from "react";

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>

      <label>💰 Bill value</label>
      <input type="text" />

      <label>🧍 your Expenses</label>
      <input type="text" />

      <label>👬 X's expense</label>
      <input type="text" disabled />

      <label htmlFor="">💸 who will pay the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
    </form>
  );
}

export default FormSplitBill;
