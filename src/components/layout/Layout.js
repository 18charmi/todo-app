import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="mx-auto max-w-7xl p-2 sm:p-6 lg:p-8">
      {children}
      </div>
    </div>
  );
};
export default Layout;
