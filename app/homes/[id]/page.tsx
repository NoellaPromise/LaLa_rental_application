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
import { homes } from "@/lib/data"; // Import from the shared file

export default function HomeDetail({ params }: { params: { id: string } }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Find the home that matches the id parameter
  const homeId = parseInt(params.id);
  const homeDetails = homes.find(home => home.id === homeId) || {
    id: 0,
    name: "Home not found",
    image: "/placeholder.svg",
    price: 0,
    description: "The requested home could not be found.",
    features: []
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking logic here
    console.log("Booking submitted:", { startDate, endDate, homeId: homeDetails.id });
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image
            src={homeDetails.image || "/placeholder.svg"}
            alt={homeDetails.name}
            width={800}
            height={600}
            className="rounded-lg shadow-md object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{homeDetails.name}</h1>
          <p className="text-xl text-gray-600 mb-4">
            ${homeDetails.price} per night
          </p>
          <p className="text-gray-700 mb-6">{homeDetails.description}</p>
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside mb-6">
            {homeDetails.features.map((feature, index) => (
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