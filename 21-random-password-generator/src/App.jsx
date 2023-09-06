import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let generatedPassword = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let special = "!@#$%^&*()_+";

    if (number) {
      characters += numbers;
    }

    if (char) {
      characters += special;
    }

    for (let i = 0; i < length; i++) {
      generatedPassword += characters.charAt(
        Math.floor(Math.random() * characters.length + 1)
      );
    }

    setPassword(generatedPassword);
  }, [length, number, char, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [length, number, char, generatePassword]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md  rounded-lg px-4 py-8 my-8 text-green-600 bg-gray-700">
      <h1 className="text-white text-center my-3">Random Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="w-full px-4 py-2 text-gray-700 focus:outline-none"
          placeholder="Password"
          readOnly
        />
        <button className=" uppercase outline-none bg-blue-500 text-white px-3 py-1 shrink-0">
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex item-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setlength(e.target.value);
            }}
          />
          <label htmlFor="">Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={number}
            id="numberInput"
            onChange={() => {
              setNumber((prev) => !prev);
            }}
          />
          <label htmlFor="numverInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={char}
            id="charInput"
            onChange={() => {
              setChar((prev) => !prev);
            }}
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
