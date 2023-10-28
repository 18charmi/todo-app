import Login from "./components/page/Login";
import Dashboard from "./components/page/Dashboard";
import AddTodo from "./components/page/AddTodo";
import { Route, Routes } from "react-router-dom";
import { PAGE_LINKS } from "./lib/pageLink";
import { Provider } from "react-redux";
import store from "./store/store";
import { ProtectedRoute } from "./components/page/ProtectedRoute";
import { AuthProvider } from "./components/hooks/useAuth";

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
      <div>
        <Routes>
          <Route
            path={PAGE_LINKS.HOME}
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path={PAGE_LINKS.LOGIN} element={<Login />} />
          <Route
            path={PAGE_LINKS.ADD_TODO}
            element={
              <ProtectedRoute>
                <AddTodo />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      </AuthProvider>
    </Provider>
  );
}

export default App;
