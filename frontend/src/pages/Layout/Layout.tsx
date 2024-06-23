import { Footer, Header } from "../../widgets";
// import * as classes from "./layout.module.scss";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
