import { createSlice } from "@reduxjs/toolkit";
import { TODOS_ACTION } from "./todosAction";
import { getCurrentDateTime } from "../../lib/commonFunction";

export const initialState = {
  // todos: [],
  todos: [
    {
      id: 11, // first 10 items were skipped
      title: "Text a friend I haven't talked to in a long time",
      description:
        "Description: Text a friend I haven't talked to in a long time",
      completed: false,
      userId: 39,
    },
    {
      id: 12,
      title: "Organize pantry",
      description: "Description : Organize pantry",
      completed: true,
      userId: 39,
    },
    {
      id: 13,
      title: "Buy a new house decoration",
      description: "Description: Buy a new house decoration",
      completed: false,
      userId: 16,
    },
  ],
  action: TODOS_ACTION.RESET,
};

const toDos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    actionOnTodo: (state, { payload }) => {
      state.action = payload;
    },
    addToDo: (state, { payload }) => {
      const id =
        state.todos.length === 0
          ? 1
          : state.todos[state.todos.length - 1].id + 1;
      state.todos = [
        { id, ...payload, createdAt: getCurrentDateTime(), completed: false },
        ...state.todos,
      ];
      state.action = TODOS_ACTION.RESET;
    },
    editActiveNote: (state, { payload }) => {
      state.todos = state.todos.map((item) =>
        item.id === payload.id ? { ...item, ...payload } : item
      );
      state.action = TODOS_ACTION.RESET;
    },
    loadToDos: (state) => initialState,
    loadToDosSuccess: (state, { payload }) => {
      state.todos = payload;
    },
    loadToDosError: (state) => initialState,
    saveToDos: (state) => {},
  },
});

export const {
  actionOnTodo,
  addToDo,
  editActiveNote,

  loadToDos,
  loadToDosError,
  loadToDosSuccess,
  saveToDos,
} = toDos.actions;
export default toDos.reducer;
