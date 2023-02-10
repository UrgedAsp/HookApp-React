import React, { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({onNewTodo}) => {
  const { onInputChange, onResetForm, todo } = useForm({
    todo: "",
  });


  const handleSubmit = (event) => {
    event.preventDefault()
    if(todo.length < 3) return

    const newTodo = {
        id: new Date().getTime(),
        description: todo,
        done: false
    }

    onNewTodo(newTodo);
    onResetForm()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="¿Que hay que hacer?"
        className="form-control"
        name="todo"
        value={todo}
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-outline-primary mt-1">
        Agregar
      </button>
    </form>
  );
};
