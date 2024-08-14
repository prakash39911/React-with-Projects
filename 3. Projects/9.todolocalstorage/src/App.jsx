import { useEffect, useState } from "react";
import { TodoContextProvider } from "./context";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]); // All todo objects are stored in an array.

  const addTodo = (todo) => {
    setTodos((prevTodoArray) => [{ ...todo }, ...prevTodoArray]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prevTodoArray) =>
      prevTodoArray.map((todoObj) => (todoObj.id === id ? todo : todoObj))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodoArray) =>
      prevTodoArray.filter((todoObj) => todoObj.id !== id)
    );
  };

  const toggleComplete = (id) => {
    setTodos((prevTodoArray) =>
      prevTodoArray.map((todoObj) =>
        todoObj.id === id
          ? { ...todoObj, completed: !todoObj.completed }
          : todoObj
      )
    );
  };

  useEffect(() => {
    const isValue = JSON.parse(localStorage.getItem("localStorageTodo"));

    if (isValue.length === 0) {
      return;
    }

    if (isValue && isValue.length > 0) {
      setTodos(isValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("localStorageTodo", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
