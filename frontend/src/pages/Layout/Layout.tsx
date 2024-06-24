import React from "react";
import { Footer, Header } from "../../widgets";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
