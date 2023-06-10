import FormField from "./FormField";
import Input from "../ui/Input";
import Button from "../ui/Button";

const AddTodoForm = () => {
  return (
    <div className="mx-auto">
      <div className="mt-10 px-12 md:px-24 ">
        <form>
          <FormField label="Title">
            <Input type="text" placeholder="Enter title" />
          </FormField>
          <FormField label="Description">
            <Input type="text" placeholder="Enter description" textArea />
          </FormField>

          <FormField>
            <Button type="submit" fullWidth>
              Add Todo
            </Button>
          </FormField>
        </form>
      </div>
    </div>
  );
};
export default AddTodoForm;
