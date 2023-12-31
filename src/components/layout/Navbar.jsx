import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { PAGE_LINKS } from "../../lib/pageLink";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const { user, logout} = useAuth();

  //remove user session
  const _handleLogout = () => {
    logout();
  };
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <Link to={PAGE_LINKS.HOME}>
            <span
              className=" text-white rounded-md py-2 text-sm font-medium"
              aria-current="page"
            >
              Welcome {user.name}
            </span>
          </Link>
          <Button transparent sm onClick={_handleLogout}>
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
