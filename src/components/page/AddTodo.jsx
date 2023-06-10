import { useDispatch, useSelector } from "react-redux";
import AddTodoForm from "../form/AddTodoForm";
import Layout from "../layout/Layout";

import { actionOnTodo, addToDo } from "../../store/slices/todos";
import { toDoSelector } from "../../store/selectors";
import { TODOS_ACTION } from "../../store/slices/todosAction";
import { useNavigate } from "react-router-dom";
import { PAGE_LINKS } from "../../lib/pageLink";
import { useAuth } from "../hooks/useAuth";

function AddTodo() {
  const { action } = useSelector(toDoSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAuth();

  // update store byy adding new note & navigate to dashboard
  const _onSubmit = (payload) => {
    dispatch(actionOnTodo(TODOS_ACTION.CREATING));
    setTimeout(() => {
      dispatch(addToDo({ ...payload, userId: user.id }));
      navigate(PAGE_LINKS.HOME);
    }, 200);
  };

  return (
    <Layout>
      <div className="flex justify-center items-center pb-4">
        <h2 className="text-2xl font-semibold">Add New Task to do...</h2>
      </div>
      <AddTodoForm
        onSubmit={_onSubmit}
        loading={action === TODOS_ACTION.CREATING}
      />
    </Layout>
  );
}

export default AddTodo;
