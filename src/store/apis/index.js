const TODOS = "todos";
const getToDos = () => {
  return new Promise((resolve, reject) => {
    const todos = localStorage.getItem(TODOS);

    // check if there is any data in localstorage
    if (!todos) {
      resolve([]);
    } else if (Array.isArray(JSON.parse(todos))) {
      resolve(JSON.parse(todos));
    } else {
      reject({
        message: "Something went wrong",
      });
    }
  });
};

const saveToDos = (todos) => {
  return new Promise((resolve) => {
    localStorage.setItem(TODOS, JSON.stringify(todos));
    resolve();
  });
};

const apis = { loadToDos: getToDos, saveToDos };
export default apis;
