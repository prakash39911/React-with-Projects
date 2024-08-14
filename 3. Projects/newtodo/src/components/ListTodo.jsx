import React, { useState } from "react";
import { updateTodo, deleteTodo } from "../store/todoslice";
import { useDispatch, useSelector } from "react-redux";

export default function ListTodo({ todoObj }) {
  const [todomsg, setTodomsg] = useState(todoObj.text);
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  const dispatch = useDispatch();

  const deleteTo = () => {
    dispatch(deleteTodo(todoObj.id));
  };

  const handleEdit = () => {
    setIsTodoEditable(!isTodoEditable);
    dispatch(updateTodo({ todoObj, todomsg }));
  };

  return (
    <>
      <div className="bg-slate-700 py-3 flex justify-between rounded-md">
        <div className="flex gap-6 pl-2">
          <input
            type="text"
            className={`pl-1 pr-14 bg-slate-600 rounded-md ${
              isTodoEditable ? "border-2 border-emerald-500" : ""
            }`}
            value={todomsg}
            readOnly={!isTodoEditable}
            onChange={(e) => setTodomsg(e.target.value)}
          />
        </div>
        <div className="gap-5 flex pr-2">
          <button
            className="px-6 bg-yellow-700 rounded-md"
            onClick={handleEdit}
          >
            {isTodoEditable ? "Save" : "Edit"}
          </button>
          <button className="px-5 bg-red-800 rounded-md" onClick={deleteTo}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
