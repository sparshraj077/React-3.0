import { useState } from "react";
import './index.css';


function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center" style={{ backgroundColor: color }}>
      <h1 className="text-3xl font-bold text-white mb-4">Background Color Changer</h1>
      
      <div className="flex gap-20">
        <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          onClick={() => setColor("red")}>
          Red
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          onClick={() => setColor("blue")}>
          Blue
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          onClick={() => setColor("green")}>
          Green
        </button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
          onClick={() => setColor("gray")}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
