import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <div className="mx-5 lg:mx-20">{children}</div>;
};

export default Layout;
