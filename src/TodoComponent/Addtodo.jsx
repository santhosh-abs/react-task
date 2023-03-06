import React, {useState} from "react";

import './style.scss'

const AddTodo = ({add}) => {
  const [text, setText] = useState("");
  return (
    <div className="add-todo d-flex justify-content-center">
      <input className="input form-control" placeholder="Enter todo" value={text} onChange={e => setText(e.target.value)}/>
      <button className="btn btn-outline-secondary ms-3" onClick={() => {add(text); setText("")}}>Add</button>
    </div>
  );
}

export default AddTodo;