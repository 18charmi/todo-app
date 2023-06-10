import { useEffect, useState } from "react";
import FormField from "./FormField";
import Input from "../ui/Input";
import Button from "../ui/Button";
import GuestLayout from "../layout/GuestLayout";
import content from "../../lib/testingUserList.json";
import { PAGE_LINKS } from "../../lib/pageLink";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const { user, login } = useAuth();

  useEffect(() => {
    if (!!user) navigate(PAGE_LINKS.HOME);
  }, [user]);

  // submit details
  const _onSubmit = (e) => {
    e.preventDefault();
    if (!loading) {
      setLoading(true);

      const userExist = content.testingUserlist.find((user) => user.username === username);
      if (!!userExist) {
        if (userExist.password === password) {
          login(userExist);
        } else {
          setError("User details are not correct");
        }
      } else {
        setError("User does not exist");
      }

      setLoading(false);
    }
  };

  return (
    <GuestLayout>
      <div className="lg:w-1/2">
        <div className="mt-10 px-12 md:px-24 ">
          <h2
            className="text-center text-4xl text-gray-900 font-display font-semibold lg:text-left xl:text-5xl
            xl:text-bold"
          >
            Log in
          </h2>
          <div className="mt-12">
            <form onSubmit={_onSubmit}>
              <FormField label="Username">
                <Input
                  type="text"
                  placeholder="username"
                  value={username}
                  onChange={setUsername}
                />
              </FormField>
              <FormField label="Password">
                <Input
                  type="password"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={setPassword}
                />
              </FormField>
              {error.length > 0 ? (
                <div className="text-sm text-red-900 p-4">{error}</div>
              ) : null}
              <FormField>
                <Button type="submit" fullWidth>
                  {loading ? "Checking user details.." : "Log In"}
                </Button>
              </FormField>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center bg-gray-100 flex-1 h-screen"></div>
    </GuestLayout>
  );
};
export default LoginForm;
