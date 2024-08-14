import { useState } from "react";
import "./App.css";
import Card from "./components/Card.jsx";

// we can import one component and use it in another component.
// Whatever data we define in the imported Card Component (e.g - <Card userName="Rohan" />), we can access this data in the Props object in actual Card Component function.
// Accordingly we can set different properties or values for same component used multiple times.

function App() {
  const [count, setCount] = useState(0);
  const myObj = {
    name: "hello",
    age: 15,
  };

  return (
    <>
      <div className="flex flex-col gap-10">
        <div>
          <h1 className="bg-gray-700">Hello there</h1>
        </div>
        <div className="flex flex-wrap gap-10">
          <Card userName="Rohan" obj={myObj} btnText="Touch it" />
          <Card userName="Shyam" obj={myObj} btnText="click me new" />
          <Card userName="You" obj={myObj} btnText="new dutton added" />
        </div>
      </div>
    </>
  );
}

export default App;
