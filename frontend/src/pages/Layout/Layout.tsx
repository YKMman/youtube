import React from "react";
import { Footer, Header } from "../../widgets";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-full flex flex-col">
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
