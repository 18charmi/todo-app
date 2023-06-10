import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import { USER_SESSION_DETAILS } from "../../lib/userDetails";
import { PAGE_LINKS } from "../../lib/pageLink";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage(USER_SESSION_DETAILS, null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data) => {
    setUser(data);
    navigate(PAGE_LINKS.HOME);
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    navigate(PAGE_LINKS.LOGIN, { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};