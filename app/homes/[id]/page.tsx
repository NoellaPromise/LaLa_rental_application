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
  name: "Mercedes-Benz S-Class",
  image:"",
    // "https://images.unsplash.com/photo-1616788494672-ec7c48196f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  price: 200,
  description:
    "Experience ultimate comfort and style with our premium Mercedes-Benz S-Class. Perfect for business trips or special occasions.",
  features: [
    "Leather seats",
    "Advanced sound system",
    "GPS navigation",
    "Automatic transmission",
    "Adaptive cruise control",
    "Panoramic sunroof",
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
              <CardTitle>Book This Car</CardTitle>
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
