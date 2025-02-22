// app/add-house/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function AddHouse() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/houses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
          hostId: "current-user-id", // In a real app, get this from auth context
        }),
      });

      if (response.ok) {
        // Redirect to my-houses page after successful addition
        router.push("/my-houses");
        router.refresh(); // Force refresh to show new data
      }
    } catch (error) {
      console.error("Error adding house:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mx-auto p-6">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Add New House</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2">Title</label>
              <Input
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                placeholder="Enter house title"
              />
            </div>

            <div>
              <label className="block mb-2">Description</label>
              <Textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                placeholder="Describe your house"
              />
            </div>

            <div>
              <label className="block mb-2">Price per night ($)</label>
              <Input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                placeholder="Enter price per night"
              />
            </div>

            <div>
              <label className="block mb-2">Location</label>
              <Input
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                placeholder="Enter house location"
              />
            </div>

            <Button type="submit" className="w-full">
              Add House
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
