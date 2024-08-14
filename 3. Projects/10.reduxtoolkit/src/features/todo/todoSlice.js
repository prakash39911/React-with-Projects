import { createSlice, nanoid } from "@reduxjs/toolkit";

// "nanoid" generates unique id.

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello World",
    },
  ],
};

// Whatever method we define in reducer property, those methods or functions have access to TWO parameters---state, action.

// State parameter will give access to Current State.
// For removeTodo fucntion, we need todo id.. "action" parameter will give access to values like id.
// "action" Object basically gives access to the passed data.

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (eachTodo) => eachTodo.id !== action.payload
      );
    },
  },
});

// we will update the state only through "Reducers" methods.

export const { addTodo, removeTodo } = todoSlice.actions;

// Whatever store we have created, needs access to all the reducers created. So that Store can only accept or update data and manage the store.

export default todoSlice.reducer;
