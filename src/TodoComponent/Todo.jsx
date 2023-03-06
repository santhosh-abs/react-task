import React, {useState} from "react";

import './style.scss'

const Todo = ({ todo, remove, edit }) => {
  const [mode, setMode] = useState("");
  const [text, setText] = useState(todo.text);
  return (
    <div className="todo d-flex justify-content-center">
      {mode === ""
        ? <>
          <span className="btn btn-outline-secondary mt-3">{todo.text}</span>
          <button className="btn btn-outline-secondary ms-3 mt-3" onClick={remove}>Delete</button>
          <button className="btn btn-outline-secondary ms-3 mt-3" onClick={() => setMode("edit")}>Edit</button>
        </>
        : <>
          <input className="input form-control mt-3" value={text} onChange={e => setText(e.target.value)} />
          <button className="btn btn-outline-secondary ms-3 mt-3" onClick={() => {edit(text); setMode("");}}>Save</button>
          <button className="btn btn-outline-secondary ms-3 mt-3" onClick={() => setMode("")}>Cancel</button>
        </>}
    </div>
  );
}

export default Todo;


