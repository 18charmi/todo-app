import AddTodoForm from "../form/AddTodoForm";
import Layout from "../layout/Layout";

function AddTodo() {
  return (
    <Layout>
      <div className="flex justify-center items-center pb-4">
        <h2 className="text-2xl font-semibold">Add New Task to do...</h2>
      </div>
      <AddTodoForm/>
    </Layout>
  );
}

export default AddTodo;
