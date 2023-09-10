import { useEffect } from "react";
import { getAllTodos } from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
//component
import List from "./List";
import Tabs from "./Tabs";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  useEffect(() => {
    dispatch(getAllTodos());
  }, []);
  return (
    <article>
      <div>
        <Tabs />
      </div>
      <ul>
        {todos.map((todo) => (
          <List key={todo._id} todo={todo} />
        ))}
      </ul>
    </article>
  );
};
export default Todos;
