import { useState } from "react";
import Button from "./Button";

const CardData = {
  title: "Noteworthy technology acquisitions 2021",
  description:
    "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
};
const TodoItem = ({
  title = CardData.title,
  description = CardData.description,
}) => {
  const [edit, updateEdit] = useState(false);
  return (
    <div className="flex flex-col w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <hr />
      <p className="font-normal text-gray-700 dark:text-gray-400 py-6">
        {description}
      </p>
      <div className="flex flex-wrap md:justify-between justify-center items-center">
        <Button linkElement sm>
          Edit
        </Button>

        <p className="text-gray-700 dark:text-gray-400 ml-auto text-sm">
          Created on current date & time YYYYMMDDHHmmss
        </p>
      </div>
    </div>
  );
};
export default TodoItem;
