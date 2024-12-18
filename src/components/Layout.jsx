import Header from "./Header/Header";
import { Suspense } from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};

export default Layout;
