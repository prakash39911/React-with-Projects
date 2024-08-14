import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoslice = createSlice({
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
    updateTodo: (state, action) => {
      console.log(action);
      state.todos = state.todos.map((todoObj) =>
        todoObj.id === action.payload.todoObj.id
          ? { ...todoObj, text: action.payload.todomsg }
          : todoObj
      );
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todoObj) => todoObj.id !== action.payload
      );
    },
    getTodoFromLocalStorage: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, getTodoFromLocalStorage } =
  todoslice.actions;

export default todoslice.reducer;
