import React, { FC, PropsWithChildren } from "react";
import "@assets/styles/globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Next.js Sandbox",
  description: "A simple Next.js sandbox project",
  keywords: ["Next.js", "React", "Sandbox"],
};

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html>
      <body>
        <header>
          <Navbar />
          <h1 className="text-4xl font-bold mb-4">Next.js Sandbox</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
