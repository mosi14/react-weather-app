import { useEffect } from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import { useTheme } from "./context/theme.context.jsx";

function App() {
  const { dark } = useTheme();

  return (
    <div className={`${dark ? "dark:bg-gray-800 dark:text-stone-100 " : ""}`}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
