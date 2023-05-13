import { useState } from "react";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Register />
    </>
  );
}

export default App;
