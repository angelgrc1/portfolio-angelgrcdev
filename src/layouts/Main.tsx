import { Footer, Header } from "@/components";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Main: React.FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main className="flex flex-col w-full min-h-[calc(100vh-200px)]">{children}</main>
      <Footer />
    </React.Fragment>
  );
};
