import FormField from "./FormField";
import Input from "../ui/Input";
import Button from "../ui/Button";
import GuestLayout from "../layout/GuestLayout";

const LoginForm = () => {
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
            <form>
              <FormField label="Email Address">
                <Input type="text" placeholder="example@mail.com" />
              </FormField>
              <FormField label="Password">
                <Input type="password" placeholder="Enter your Password" />
              </FormField>

              <FormField>
                <Button type="submit" fullWidth>Log In</Button>
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
