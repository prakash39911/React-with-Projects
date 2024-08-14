import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("grey");

  return (
    <>
      <div
        className="w-full h-screen flex justify-center"
        style={{ backgroundColor: color }}
      >
        <div className="w-2/3 flex justify-between flex-wrap bottom-10 h-12 bg-white fixed rounded-sm gap-1 px-2">
          <button
            className=" rounded-xl px-10 py-0 h-9 top-1.5 relative"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Hello
          </button>

          <button
            className=" rounded-xl px-10 py-0 h-9 top-1.5 relative"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Hello
          </button>

          <button
            className=" rounded-xl px-10 py-0 h-9 top-1.5 relative"
            style={{ backgroundColor: "olive" }}
            onClick={() => setColor("olive")}
          >
            Hello
          </button>

          <button
            className=" rounded-xl px-10 py-0 h-9 top-1.5 relative"
            style={{ backgroundColor: "brown" }}
            onClick={() => setColor("brown")}
          >
            Hello
          </button>

          <button
            className=" rounded-xl px-10 py-0 h-9 top-1.5 relative"
            style={{ backgroundColor: "violet" }}
            onClick={() => setColor("violet")}
          >
            Hello
          </button>

          <button
            className="text-purple-50 rounded-xl px-10 py-0 h-9 top-1.5 relative"
            style={{ backgroundColor: "black" }}
            onClick={() => setColor("black")}
          >
            Hello
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
