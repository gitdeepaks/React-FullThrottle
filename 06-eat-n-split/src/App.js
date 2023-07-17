import React from "react";
import FriendList from "./components/FriendList";
// import { useState } from "react";

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
      </div>
    </div>
  );
}

export default App;
