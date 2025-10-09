"use client";

import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";

const PropertyDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const searchParams = useSearchParams();
  console.log("Rendering Property Detail Page for ID:", id);
  return (
    <>
      <div>Property Detail Page for Property ID: {id}</div>
      <div>Search Params: {searchParams.toString()}</div>
      <Link href="/properties">Back to Properties</Link>
    </>
  );
};

export default PropertyDetailPage;
