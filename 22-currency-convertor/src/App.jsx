import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const BackgroundImage = "https://picsum.photos/seed/picsum/1920/1080";

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
