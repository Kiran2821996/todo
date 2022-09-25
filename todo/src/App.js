import React, { useState } from "react";
export function App() {
  const [todos, setTodos] = useState([]);
  const [todoItem, setTodoItem] = useState("");
  const [onEdit, setOnEdit] = useState(false);
  const [editableIndex, setEditableIndex] = useState();
  const [editedTodo, setEditedTodo] = useState("");
  const[read,setRead]=useState(true)
  const addTodo = () => {
    if (!todoItem) {
      alert("Please enter a valid item");
      return "";
    }
    setTodos([...todos, todoItem]);
    setTodoItem("");
  };
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const editTodo = (index) => {
    setOnEdit(true);
    setEditableIndex(index);
    setRead(false)
  };
  const saveTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index] = editedTodo;
    setTodos(newTodos);
    setOnEdit(false);
    setEditableIndex(-1);
    setRead(true);
  };
  return (
    <div className="parent_container">
      <h1>TO DO LIST</h1>
      <input className="parent_container-input"
        value={todoItem}
        onChange={(e) => {
          setTodoItem(e.target.value);
        }}
        type="text"
      />
      <button className="parent_container-btn" onClick={addTodo}>Add todo</button>
      {todos.map((item, index) => {
        return (
          <div className="child_container" key={item}>
            {index === editableIndex && onEdit ? (
              <div className="child_container-save">
                <input
                  type="text"
                  className="child_container-input-save"
                  defaultValue={item}
                  onChange={(e) => {
                    setEditedTodo(e.target.value);
                    console.log(editedTodo);
                  }}
                  readOnly={read}
                />
                <button className="child_container-input-save-btn" onClick={() => saveTodo(index)}>Save</button>
              </div>
            ) : (
              <div className="child_container-edit">
                <input type="text" className="child_container-input-edit" value={item} readOnly={read}/>
                <button className="child_container-input-edit-btn" onClick={() => editTodo(index)}>Edit</button>
              </div>
            )}
            <button className="delete_btn" onClick={() => deleteTodo(index)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

