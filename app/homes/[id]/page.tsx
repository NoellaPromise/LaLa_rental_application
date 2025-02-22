"use client";

import { useState } from "react";
import { use } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { homes } from "@/lib/data";
import { useBookings } from "@/app/components/BookingsManager";

export default function HomeDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const { toast } = useToast();
  const { addBooking, bookings } = useBookings();
  const router = useRouter();

  const homeId = parseInt(resolvedParams.id);
  const homeDetails = homes.find((home) => home.id === homeId) || {
    id: 0,
    name: "Home not found",
    image: "/placeholder.svg",
    price: 0,
    description: "The requested home could not be found.",
    features: [],
  };

  // Function to check if dates overlap
  const isDateRangeOverlapping = (
    start1: Date,
    end1: Date,
    start2: Date,
    end2: Date
  ) => {
    return start1 <= end2 && start2 <= end1;
  };

  // Function to check if the home is available for the selected dates
  const isHomeAvailable = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Check against all existing bookings for this home
    const existingBookings = bookings.filter(
      (booking) => booking.homeId === homeId
    );

    for (const booking of existingBookings) {
      const bookingStart = new Date(booking.startDate);
      const bookingEnd = new Date(booking.endDate);

      if (isDateRangeOverlapping(start, end, bookingStart, bookingEnd)) {
        const formattedStart = bookingStart.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        });
        const formattedEnd = bookingEnd.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        });

        return {
          available: false,
          message: `This home is already booked from ${formattedStart} to ${formattedEnd}. Please select different dates.`,
        };
      }
    }

    return { available: true, message: "" };
  };

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Basic date validation
      const start = new Date(startDate);
      const end = new Date(endDate);

      if (end <= start) {
        toast({
          title: "Invalid Dates",
          description: "Check-out date must be after check-in date",
          variant: "destructive",
        });
        return;
      }

      // Check if the dates are in the past
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (start < today) {
        toast({
          title: "Invalid Dates",
          description: "Check-in date cannot be in the past",
          variant: "destructive",
        });
        return;
      }

      // Check availability
      const availability = isHomeAvailable(startDate, endDate);
      if (!availability.available) {
        toast({
          title: "Home Unavailable",
          description: availability.message,
          variant: "destructive",
        });
        return;
      }

      const newBooking = {
        id: Date.now().toString(),
        homeId: homeDetails.id,
        homeName: homeDetails.name,
        imageUrl: homeDetails.image,
        price: homeDetails.price,
        startDate,
        endDate,
      };

      // Add the booking to our context
      addBooking(newBooking);

      // Show success toast
      toast({
        title: "✨ Booking Successful!",
        description: `Get ready for your stay at ${homeDetails.name}! We can't wait to host you.`,
      });

      // Navigate to the My Bookings page after a short delay
      setTimeout(() => {
        router.push("/my-bookings");
      }, 1000);
    } catch (error) {
      console.error("Booking error:", error);
      toast({
        title: "Booking Failed",
        description:
          "There was an error processing your booking. Please try again.",
        variant: "destructive",
      });
    }
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
              <form onSubmit={handleBooking} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="start-date">Check-in Date</Label>
                    <Input
                      id="start-date"
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      required
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="end-date">Check-out Date</Label>
                    <Input
                      id="end-date"
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      min={startDate || new Date().toISOString().split("T")[0]}
                      required
                      className="w-full"
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
