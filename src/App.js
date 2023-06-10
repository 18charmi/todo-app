import Login from "./components/page/Login";
import Dashboard from "./components/page/Dashboard";
import AddTodo from "./components/page/AddTodo";
import { Route, Routes } from "react-router-dom";
import { PAGE_LINKS } from "./lib/pageLink";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Routes>
          <Route path={PAGE_LINKS.HOME} element={<Dashboard />} />
          <Route path={PAGE_LINKS.LOGIN} element={<Login />} />
          <Route path={PAGE_LINKS.ADD_TODO} element={<AddTodo />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
