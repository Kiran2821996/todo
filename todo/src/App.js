import React, { useState } from "react";
export function App() {
  const [todos, setTodos] = useState([]);
  const [todoItem, setTodoItem] = useState("");
  const [onEdit, setOnEdit] = useState(false);
  const [editableIndex, setEditableIndex] = useState();
  const [editedTodo, setEditedTodo] = useState("");
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
  };
  const saveTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index] = editedTodo;
    setTodos(newTodos);
    setOnEdit(false);
    setEditableIndex(-1);
  };
  return (
    <div>
      <input
        value={todoItem}
        onChange={(e) => {
          setTodoItem(e.target.value);
        }}
        type="text"
      />
      <button onClick={addTodo}>Add todo</button>
      {todos.map((item, index) => {
        return (
          <div>
            {index === editableIndex && onEdit ? (
              <div>
                <input
                  type="text"
                  defaultValue={item}
                  onChange={(e) => {
                    setEditedTodo(e.target.value);
                    console.log(editedTodo);
                  }}
                />
                <button onClick={() => saveTodo(index)}>Save</button>
              </div>
            ) : (
              <div>
                <h1>{item}</h1>
                <button onClick={() => editTodo(index)}>Edit</button>
              </div>
            )}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
