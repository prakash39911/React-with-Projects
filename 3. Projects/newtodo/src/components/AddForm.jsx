import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../store/todoslice";

function AddForm() {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue("");
  };

  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit}
          className="relative flex justify-center top-10 gap-10"
        >
          <input
            type="text"
            className="bg-slate-500 pl-1 pr-60 py-2 rounded-md"
            placeholder="Enter Todo...."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="px-5 py-2 bg-blue-900 rounded-md text-gray-300">
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default AddForm;
