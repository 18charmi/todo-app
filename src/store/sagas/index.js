import { all, call, put, select, takeLatest } from "redux-saga/effects";
import {
  addToDo,
  editActiveNote,
  loadToDos,
  loadToDosError,
  loadToDosSuccess,
  saveToDos,

} from "../slices/todos";
import api from "../apis";
import { toDoSelector } from "../selectors";

export function* loadToDosSaga() {
  try {
    const todos = yield call(api.loadToDos);
    yield put(loadToDosSuccess(todos));
  } catch {
    yield put(loadToDosError());
  }
}

export function* saveToDosSaga() {
  const todosState = yield select(toDoSelector);
  yield call(api.saveToDos, todosState.todos);
}

export function* dataChangedSaga() {
  yield put(saveToDos());
}

export function* rootSaga() {
  yield all([
    takeLatest(loadToDos, loadToDosSaga),
    takeLatest(saveToDos, saveToDosSaga),
    takeLatest(editActiveNote, dataChangedSaga),
    takeLatest(addToDo, dataChangedSaga),
  ]);
}