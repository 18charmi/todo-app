import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { PAGE_LINKS } from "../../lib/pageLink";

export const ProtectedRoute = ({ children }) => {
  const {user} = useAuth();

  if (!user) {
    // user is not authenticated
    return <Navigate to={PAGE_LINKS.LOGIN} />;
  }
  return children;
};