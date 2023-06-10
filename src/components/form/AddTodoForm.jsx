import { useEffect, useState } from "react";
import FormField from "./FormField";
import Input from "../ui/Input";
import Button from "../ui/Button";

const AddTodoForm = ({
  onSubmit,
  loading,
  onClose,
  defaultTitle,
  defaultDescription,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (defaultTitle?.length > 0 || defaultDescription?.length > 0) {
      setTitle(defaultTitle);
      setDescription(defaultDescription);
    }
  }, [defaultTitle, defaultDescription]);

  // reset form after loading gets completed
  useEffect(() => {
    if (!loading && (title !== "" || description !== "")) {
      setTitle("");
      setDescription("");
    }
  }, [loading]);

  // submit details
  const _onSubmit = (e) => {
    e.preventDefault();
    if (!loading) onSubmit({ title, description });
  };
  
  return (
    <div className="mx-auto bg-white ">
      <div className="mt-10 px-12 md:px-24 ">
        <form onSubmit={_onSubmit}>
          <FormField label="Title">
            <Input
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={setTitle}
            />
          </FormField>
          <FormField label="Description">
            <Input
              type="text"
              placeholder="Enter description"
              textArea
              value={description}
              onChange={setDescription}
            />
          </FormField>

          <FormField>
            <Button type="submit" fullWidth>
              {loading ? "Saving Todo" : "Save Todo"}
            </Button>
          </FormField>

          {typeof onClose !== "undefined" && (
            <FormField>
              <Button linkElement sm fullWidth onClick={onClose}>
                Close
              </Button>
            </FormField>
          )}
        </form>
      </div>
    </div>
  );
};
export default AddTodoForm;
