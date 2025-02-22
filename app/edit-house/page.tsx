// app/edit-house/[id]/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { House, HouseFormData } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function EditHouse({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [formData, setFormData] = useState<HouseFormData>({
    title: "",
    description: "",
    price: "",
    location: "",
  });

  useEffect(() => {
    const fetchHouse = async () => {
      try {
        const response = await fetch(`/api/houses/${params.id}`);
        const house: House = await response.json();
        setFormData({
          title: house.title,
          description: house.description,
          price: house.price.toString(),
          location: house.location,
        });
      } catch (error) {
        console.error("Error fetching house:", error);
      }
    };

    fetchHouse();
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/houses/${params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
        }),
      });

      if (response.ok) {
        router.push("/my-houses");
      }
    } catch (error) {
      console.error("Error updating house:", error);
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
          <CardTitle>Edit House</CardTitle>
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
              />
            </div>

            <div>
              <label className="block mb-2">Description</label>
              <Textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
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
              />
            </div>

            <div>
              <label className="block mb-2">Location</label>
              <Input
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex gap-4">
              <Button type="submit" className="flex-1">
                Update House
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push("/my-houses")}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
