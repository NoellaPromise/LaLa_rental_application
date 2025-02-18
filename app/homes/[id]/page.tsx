"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const carDetails = {
  id: 1,
  name: "Luxury Villa",
  image: "/images/first_home.jpg",
  price: 200,
  description:
    "Experience ultimate comfort and with our luxury home. Perfect for you and your family.",
  features: [
    "Well designed interiors",
    "Stunning view",
    "High-end amenities and finishes",
    "5 bed rooms",
    ],
};

export default function HomeDetail({ params }: { params: { id: string } }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking logic here
    console.log("Booking submitted:", { startDate, endDate });
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image
            src={carDetails.image || "/placeholder.svg"}
            alt={carDetails.name}
            width={800}
            height={600}
            className="rounded-lg shadow-md object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{carDetails.name}</h1>
          <p className="text-xl text-gray-600 mb-4">
            ${carDetails.price} per day
          </p>
          <p className="text-gray-700 mb-6">{carDetails.description}</p>
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside mb-6">
            {carDetails.features.map((feature, index) => (
              <li key={index} className="text-gray-700">
                {feature}
              </li>
            ))}
          </ul>
          <Card>
            <CardHeader>
              <CardTitle>Book this home</CardTitle>
              <CardDescription>Select your rental dates</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleBooking}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="start-date">Start Date</Label>
                    <Input
                      id="start-date"
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="end-date">End Date</Label>
                    <Input
                      id="end-date"
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full mt-4">
                  Book Now
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
