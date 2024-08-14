import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

// Redux is a state management library for Javascript Application.

// To use Redux with react we have to use --
// "Redux toolkit" and "React-redux" both

// React-redux is used to bind or wiring React with Redux. So that we can use Redux with react.

/////////////////////////////////
// Steps to use Redux with react--
// 1. Create store using configureStore fn. and export it. Each JS application have only one store. that is called Single Source of Truth. This store can update or receive value Only from the reducer methods. so we have to provide all the reducers to confugureStore.
// 2. Create Slice, using createSlice. We can create multiple slice under one Store.
// 3. export individiual reducer method, so that we can use them in any component we want.
// 4. Export complete reducer list to include them in the Store.
// 5. We have to wrap all the components in the Provider and give store as a Prop. So that any component can use the store to store and get the data they want.
// 6. then in any component, we can use useDispatch to send the data, and useSelector to get the data. these two methods are provided by react-redux.

export const store = configureStore({
  reducer: todoReducer,
});
