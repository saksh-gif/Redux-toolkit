import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, edit, remove, deleteAll } from "../counter/CounterSlice";

export function Counter() {
  const [text, setText] = useState("");
  const [condition, setCondition] = useState(false);
  const [any, setAny] = useState(null);
  const data = useSelector((state) => state.counter.data);
  console.log(data);
  const dispatch = useDispatch();
  function deleteUser(index) {
    dispatch(remove(index));
  }
  function addUser(val) {
    dispatch(add(val));
    setText("");
  }
  function editUser(val, index) {
    dispatch(edit(val, index));
    setCondition(!condition);
    setText("");
  }
  return (
    <div>
      <div>
        <input onChange={(e) => setText(e.target.value)} value={text} />

        <button
          aria-label="Increment value"
          onClick={() => {
            condition ? editUser({ data: text, index: any }) : addUser(text);
          }}
        >
          {condition ? "Edit" : "Add"}
        </button>
        <button onClick={() => dispatch(deleteAll())}>Delete All</button>
        {data.map((i, index) => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "3px",
              }}
            >
              <p>{i}</p>
              <button
                aria-label="Decrement value"
                onClick={() => {
                  setCondition(!condition);
                  setText(i);
                  setAny(index);
                }}
              >
                Edit
              </button>
              <button
                aria-label="Decrement value"
                onClick={() => deleteUser(index)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
