import { useState } from "react"; // useState is Hook which actually is a function.
import "./App.css";

// React basically is used to design Complex FrontEnd Single Page application.

// In javascript, if we want to update same value at multiple places, we have select those element using DOM, and insert the updated value.
// In React, we do not have select multiple elements using DOM. we will use HOOK to update the Variable and wherever that varible is used in the UI, the changes will be reflected automatically.

// React Library basically reacts on Variable Updation and can update multiple things on the UI simultaneously.
// React basically controls the UI updation.
// Hooks --- it is used to propagate the changes on the UI at single or multiple places simultaneously.

function App() {
  // UseState Hook- is used to change state.
  // it gives two values in array format.
  // first one -- variable which is gonna change everywhere in the UI, if we use setCounter to set a particular value.
  // Second one -- function which is used to set the value of a variable (array's first element).
  // We can keep any name we want for these two array element.

  let [counter, setCounter] = useState(0);
  const addValue = () => {
    setCounter(counter + 1);

    // Even if we write setCounter multiple times, Fiber Algorithm, sends all the requests in Batches, bcz we are making same request. So it only UPDATE the counter ONCE.
    //     setCounter(counter + 1);
    //    setCounter(counter + 1);
    //    setCounter(counter + 1);

    // if we want that we have to update values multiples times like this. We have to write like this. setCounter fn. accepts call back fn as well.

    // setCounter((prevValue) => prevValue + 1);
    // setCounter((prevValue) => prevValue + 1);
    // setCounter((prevValue) => prevValue + 1);
  };

  const decreaseValue = function () {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Counter</h1>

      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Increase Number {counter}</button>
      <button onClick={decreaseValue}>Decrease Number {counter}</button>
    </>
  );
}

export default App;
