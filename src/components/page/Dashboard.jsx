import Layout from "../layout/Layout";
import Button from "../ui/Button";
import TodoItem from "../ui/TodoItem";

function Dashboard() {
  return (
    <Layout>
      <div className="flex justify-between items-center pb-4">
        <h2 className="text-2xl font-semibold">List of Todo</h2>
        <Button sm border transparent shadow>
          Add New
        </Button>
      </div>
      <TodoItem />
    </Layout>
  );
}

export default Dashboard;
