// app/my-houses/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface House {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  hostId: string;
}

export default function MyHouses() {
  const router = useRouter();
  const [houses, setHouses] = useState<House[]>([]);

  // Fetch houses when component mounts
  useEffect(() => {
    fetchHouses();
  }, []);

  const fetchHouses = async () => {
    try {
      const response = await fetch("/api/houses");
      if (response.ok) {
        const data = await response.json();
        setHouses(data);
      }
    } catch (error) {
      console.error("Error fetching houses:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this house?")) {
      try {
        const response = await fetch(`/api/houses/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          // Remove the deleted house from state
          setHouses(houses.filter((house) => house.id !== id));
        }
      } catch (error) {
        console.error("Error deleting house:", error);
      }
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Houses</h1>
        <Button onClick={() => router.push("/add-house")}>Add New House</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {houses.map((house) => (
          <Card key={house.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{house.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="space-y-4">
                <p className="text-gray-600">{house.description}</p>
                <p className="font-semibold">${house.price} / night</p>
                <p className="text-gray-600">{house.location}</p>
                <Button
                  variant="destructive"
                  onClick={() => handleDelete(house.id)}
                  className="w-full"
                >
                  Delete House
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
