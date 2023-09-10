import { useState } from "react";
import { toggleTodo, updateTodo } from "../redux/actions";
import { deleteTodo } from "../redux/actions";
import { useDispatch } from "react-redux";
const List = ({ todo }) => {
  const [edit, setEditing] = useState(false);
  const [text, setText] = useState(todo?.data);
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    setEditing(!edit);

    dispatch(updateTodo(todo._id, text));
  };

  return (
    <li
      className={"task"}
      onClick={() => dispatch(toggleTodo(todo._id))}
      style={{
        textDecoration: todo?.done ? "line-through" : "",
        color: todo?.done ? "#bdc3c7" : "#34495e",
      }}
      data-testid='todo-test'
    >
      <span style={{ display: edit ? "none" : "" }}>{todo?.data}</span>

      <form
        style={{ display: edit ? "inline" : "none" }}
        onSubmit={onFormSubmit}
      >
        <input
          type='text'
          value={text}
          className='edit-todo'
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <span className='icon'>
        <i
          className='fas fa-trash'
          onClick={() => dispatch(deleteTodo(todo._id))}
        ></i>
      </span>
      <span className='icon' onClick={() => setEditing(!edit)}>
        <i className='fas fa-pen'></i>
      </span>
    </li>
  );
};
export default List;
