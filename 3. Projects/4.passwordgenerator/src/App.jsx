import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

// useCallback is a hook in React that allows you to memoize a function. This means that it returns a memoized version of the callback function that only changes if one of the dependencies has changed. This is useful to prevent unnecessary re-creations of functions on every render, which can help optimize performance, especially in cases where the function is passed as a prop to child components that rely on reference equality to prevent unnecessary renders.

// useCallback is a tool (Hook) to optimize React applications by memoizing functions, preventing unnecessary re-renders, but it should be used judiciously.

// Functions in JavaScript are objects, and every time a parent component re-renders, new instances of functions are created. If these functions are passed as props to child components, it can cause the child components to re-render unnecessarily. useCallback memoizes the function, ensuring that it is only recreated when one of its dependencies changes.

// When a parent component passes a function as a prop to a child component, the child component may re-render every time the parent re-renders, even if the function reference has not changed in behavior. By memoizing the function with useCallback, the same function reference is passed to the child component unless the dependencies change, thus preventing unnecessary re-renders.

// useEffect Hook -- accepts fn. and dependency array. It executes the fn if any of the dependencies Changes and also on Page Load or reload.

// useRef Hook - It is used to refer to a particular element.

function App() {
  const [value, setValue] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let number = "0123456789";
    let SpecialChar = "~!@#$%^&*()_-+=?><";

    if (numberAllowed) {
      string += number;
    }

    if (charactersAllowed) {
      string += SpecialChar;
    }

    for (let i = 1; i <= value; i++) {
      let index = Math.floor(Math.random() * string.length) + 1;
      pass += string.charAt(index);
    }

    setPassword(pass);
  }, [value, numberAllowed, charactersAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current.setSelectionRange(0, 10);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [value, numberAllowed, charactersAllowed, passwordGenerator]);

  return (
    <>
      <div className=" flex justify-center w-screen h-screen bg-gray-900">
        <div className="w-1/3 h-1/3 justify-center flex flex-col items-center gap-10 bg-gray-800 top-10 rounded-md relative">
          <div className="text-4xl text-gray-300">Password Generator</div>
          <div className="flex items-center relative gap-5">
            <input
              className=" w-80 rounded-md h-10 px-2"
              id="password"
              placeholder="Password"
              type="text"
              value={password}
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={() => copyPasswordToClipboard()}
              className="bg-blue-800 rounded-md px-4 py-2 text-gray-300"
            >
              Copy
            </button>
          </div>
          <div className="flex relative gap-6 items-center">
            <div className="flex relative gap-2 items-center">
              <input
                onChange={(e) => setValue(e.target.value)}
                id="value"
                type="range"
              />
              <label className="text-gray-300" for="value">
                Value--({value})
              </label>
            </div>
            <div className="flex relative gap-2 items-center">
              <input
                onChange={() => setNumberAllowed((prev) => !prev)}
                id="number"
                defaultChecked={numberAllowed}
                type="checkbox"
              />
              <label className="text-gray-300" for="number">
                Number
              </label>
            </div>
            <div className="flex relative gap-2 items-center">
              <input
                onChange={() => {
                  setCharactersAllowed((prev) => !prev);
                }}
                id="special"
                type="checkbox"
                defaultChecked={charactersAllowed}
              />
              <label className="text-gray-300" for="special">
                Special Character
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
