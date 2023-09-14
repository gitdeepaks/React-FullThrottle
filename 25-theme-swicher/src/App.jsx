import { useEffect, useState } from "react";
import "./App.css";
// import { ThemeProvider } from "./contexts/theme.jsx";

import ThemeButton from "./components/ThemeButton";
import Card from "./components/Card";
import { ThemeProvider } from "./contexts/theme";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => setThemeMode("light");

  const darkTheme = () => setThemeMode("dark");

  // actual change in theme
  useEffect(() => {
    document.querySelector("html").classList.remove("dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ darkTheme, lightTheme, themeMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>
          <h1 className="text-black-900">Hello</h1>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
