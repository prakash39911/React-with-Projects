// 1. one function returns only single element, means if we want to return multiple elements, we have to wrap them into an element Div or just write <> ....  </>.
// Components means function, fn. name should start with Capital letters like .. App, You, Hello, Getmechai etc..

function App() {
  const variableName = "Hi there"; // if we want to send this variable too, to react for rendering it on the webpage.

  return (
    <>
      <h1>There is new React APP {variableName} </h1>
      <p>Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
