import React from "react";

export default function App() {
  return (
    <div className="app">
      <Logo></Logo>
      <Form></Form>
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🍉 Far Away 🍎</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>What Do Tou Need For your Trip</h3>
    </div>
  );
}
function PackingList() {
  return <div className="list">LIST</div>;
}
function Stats() {
  return (
    <footer className="stats">
      <em>You have X Items on your List packed X (X%)</em>
    </footer>
  );
}
