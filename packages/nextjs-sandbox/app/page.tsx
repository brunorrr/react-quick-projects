import Link from "next/link";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl">Welcome to the Home Page</h1>
      <p>This is the main landing page of the application.</p>
      <Link href="/properties">Go to Properties</Link>
    </div>
  );
};

export default HomePage;
