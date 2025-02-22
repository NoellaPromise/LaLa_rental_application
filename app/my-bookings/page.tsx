"use client";

import { useBookings } from "@/app/components/BookingsManager";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

export default function MyBookings() {
  const { bookings, removeBooking } = useBookings();
  const { toast } = useToast();

  const handleCancelBooking = (bookingId: string, homeName: string) => {
    removeBooking(bookingId);
    toast({
      title: "Booking Cancelled",
      description: `Your booking for ${homeName} has been cancelled.`,
      variant: "destructive",
    });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (bookings.length === 0) {
    return (
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-8">My Bookings</h1>
        <div className="text-center py-12">
          <h2 className="text-xl text-gray-600">No bookings found</h2>
          <p className="text-gray-500 mt-2">
            Your booked properties will appear here
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">My Bookings</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {bookings.map((booking) => (
          <Card key={booking.id} className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={booking.imageUrl}
                alt={booking.homeName}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{booking.homeName}</CardTitle>
              <CardDescription>${booking.price} per night</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Check-in:</span>
                  <span className="text-sm font-medium">
                    {formatDate(booking.startDate)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Check-out:</span>
                  <span className="text-sm font-medium">
                    {formatDate(booking.endDate)}
                  </span>
                </div>
                <Button
                  variant="destructive"
                  className="w-full mt-4"
                  onClick={() =>
                    handleCancelBooking(booking.id, booking.homeName)
                  }
                >
                  Cancel Booking
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
