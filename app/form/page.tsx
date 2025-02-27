"use client";

// app/page.tsx
import { useEffect, useState } from "react";

interface Property {
  id: number;
  name: string;
}

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    // Fetch data from the API route
    fetch("/api/fetchProperties")
      .then((response) => response.json())
      .then((data: Property[]) => setProperties(data))
      .catch((error) => console.error("Error fetching properties:", error));
  }, []);

  return (
    <div>
      <h1>Properties</h1>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>
            ID: {property.id}, Name: {property.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
