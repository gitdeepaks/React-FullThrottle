import { useState, useContext } from "react";
import userContext from "../context/userContext";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(userContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h1>Login</h1>
      <input
        className="p-4 m-2 bg-gray-200 rounded"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      <input
        className="p-4 m-2 text-black-900 bg-gray-200 rounded"
        type="text"
        value={password}
        onClick={(e) => setPassword(e.target.value)}
        placeholder="password"
      />{" "}
      <button
        className="text-black-700 p-4 m-2 bg-blue-500 hover:bg-blue-700 rounded"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Login;
