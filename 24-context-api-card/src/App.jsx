import "./App.css";
import Login from "./componenets/Login";
import Profile from "./componenets/Profile";
import UserContextProvider from "./context/userContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1 className="text-3xl text-blue-600 font-bold underline">
        React With Context API
      </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
