import React from "react";

// Why do we need Context api in the first place--- if we have created an application with nested components, and we want to pass data,  that is defined in the App.jsx, to the innermost component, then we have to pass that data from top to bottom at each stage as prop. This is not at all optimized way. That is why we need something that can pass data to that innermost component directly.
// That is why we are learning Context Api. Basically it is a State management System.

///////////////////////////////////////////////////////
// step -1 --- First we have to create Context.
// step -2 --- then we have to create context Provider. Context provider will be like a wrapper, whatever components define inside of a context provider can use value given as props in the context provider tag.

// it is like a global varible, components defined under context provider can access the data defined in the provider.

const UserContext = React.createContext();

export { UserContext };
