import Link from "next/link";

const PropertiesPage = () => {
  console.log("Rendering Properties Page");
  return (
    <div>
      <p>Properties List</p>
      <ul>
        <li>
          <Link href="/properties/1">Property 1</Link>
        </li>
        <li>
          <Link href="/properties/2">Property 2</Link>
        </li>
        <li>
          <Link href="/properties/3">Property 3</Link>
        </li>
      </ul>
      <Link href="/">Go to Home</Link>
    </div>
  );
};

export default PropertiesPage;
