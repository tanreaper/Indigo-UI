import { useState } from "react";
import Signup from "./Components/Signup";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center ">
        <Signup />
      </div>
    </div>
  );
}

export default App;
