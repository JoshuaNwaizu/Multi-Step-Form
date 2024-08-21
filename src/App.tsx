import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section className="flex items-center justify-center h-svh">
      <p className="text-2xl font-bold">Multi Step Form</p>
    </section>
  );
}

export default App;
