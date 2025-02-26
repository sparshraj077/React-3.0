import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj={
    username:"sparsh",
    age:21
  }
  let newArr=[1,2,3,4]


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <Card username="Tailwind css" btnText="click me" />
      <Card username ="Vite" btnText="visit me"/>

    </div>
  );
}

export default App;

