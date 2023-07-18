import React from "react";
import Button from "./Button";

function FormAddFriend() {
  return (
    <form action="" className="form-add-friend">
      <label>👬 Friend name</label>
      <input type="text" />

      <label>🌆 Image Url</label>
      <input type="text" />

      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;
