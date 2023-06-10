import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Layout from "../layout/Layout";
import Button from "../ui/Button";
import TodoItem from "../ui/TodoItem";
import AddTodoForm from "../form/AddTodoForm";
import { toDoSelector } from "../../store/selectors";
import { PAGE_LINKS } from "../../lib/pageLink";
import { TODOS_ACTION } from "../../store/slices/todosAction";
import { actionOnTodo, editActiveNote, updateTodo } from "../../store/slices/todos";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";

function Dashboard() {
  const { todos = [], action } = useSelector(toDoSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [edit, updateEdit] = useState({});
  const [pageLoad, setPageLoad] = useState(false);
  const {user} = useAuth();

  useEffect(() => {
    dispatch(updateTodo(user.id))
    setPageLoad(true)
  },[]);
  const _handleClick = () => {
    navigate(PAGE_LINKS.ADD_TODO);
  };
  const _handleTodoUpdate = (payload, actualDetail) => {
    dispatch(actionOnTodo(TODOS_ACTION.CREATING));
    setTimeout(() => {
      dispatch(editActiveNote({ id: actualDetail.id, ...payload }));
      updateEdit({});
    }, 200);
  };

  if(!pageLoad) return <></>
  return (
    <Layout>
      <div className="flex justify-between items-center pb-4">
        <h2 className="text-2xl font-semibold">List of Todo</h2>
        <Button sm border transparent shadow onClick={_handleClick}>
          Add New
        </Button>
      </div>
      {todos.length > 0
        ? todos.map((todo) => (
            <TodoItem
              title={todo.title}
              description={todo.description}
              key={todo.id}
              onEditTodo={() => updateEdit(todo)}
            />
          ))
        : null}

      {Object.keys(edit).length > 0 ? (
        <div className="bg-gray-400 bg-opacity-50 absolute top-0 right-0 h-full w-full">
          <section className="flex flex-col justify-center items-center mt-[5%] rounded-sm">
            <h2 className="bg-white p-2 rounded-sm font-semibold">
              Update Todo Details
            </h2>
            <AddTodoForm
              defaultTitle={edit.title}
              defaultDescription={edit.description}
              onClose={() => updateEdit({})}
              onSubmit={(payload) => _handleTodoUpdate(payload, edit)}
              loading={action === TODOS_ACTION.CREATING}
            />
          </section>
        </div>
      ) : null}
    </Layout>
  );
}

export default Dashboard;
