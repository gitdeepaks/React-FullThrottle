import React from "react";

function FormSplitBill({ selectedFriend }) {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input type="text" />

      <label>🧍 your Expenses</label>
      <input type="text" />

      <label>👬 {selectedFriend.name}'s expense</label>
      <input type="text" disabled />

      <label htmlFor="">💸 who will pay the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
    </form>
  );
}

export default FormSplitBill;
