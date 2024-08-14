import { useState, useEffect } from "react";
import "./App.css";
import AddForm from "./components/AddForm";
import ListTodo from "./components/ListTodo";
import { useDispatch, useSelector } from "react-redux";
import { getTodoFromLocalStorage } from "./store/todoslice";

function App() {
  const todoArr = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  useEffect(() => {
    const isData = JSON.parse(localStorage.getItem("todolocalstorage"));

    if (isData?.length === 0) return;

    if (isData && isData.length > 0) {
      dispatch(getTodoFromLocalStorage(isData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todolocalstorage", JSON.stringify(todoArr));
  }, [todoArr]);

  return (
    <>
      <div className="w-full bg-gray-900 h-screen flex justify-center">
        <div className="w-2/3 bg-gray-800 h-2/3 flex justify-center m-20">
          <div className="flex flex-col gap-14">
            <div>
              <AddForm />
            </div>
            <div className="flex flex-col gap-2">
              {todoArr?.map((todoObj) => (
                <div key={todoObj.id}>
                  <ListTodo todoObj={todoObj} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
