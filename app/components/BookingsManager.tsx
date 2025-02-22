"use client";
import React, { createContext, useContext, useState } from "react";

interface Booking {
  id: string;
  homeId: number;
  homeName: string;
  imageUrl: string;
  price: number;
  startDate: string;
  endDate: string;
}

interface BookingsContextType {
  bookings: Booking[];
  addBooking: (booking: Booking) => void;
  removeBooking: (bookingId: string) => void;
}

const BookingsContext = createContext<BookingsContextType | undefined>(
  undefined
);

export function BookingsProvider({ children }: { children: React.ReactNode }) {
  const [bookings, setBookings] = useState<Booking[]>([]);

  const addBooking = (booking: Booking) => {
    setBookings((prev) => [...prev, booking]);
    // Optional: Log to verify booking is added
    console.log("Adding booking:", booking);
    console.log("Updated bookings:", [...bookings, booking]);
  };

  const removeBooking = (bookingId: string) => {
    setBookings((prev) => prev.filter((booking) => booking.id !== bookingId));
  };

  return (
    <BookingsContext.Provider value={{ bookings, addBooking, removeBooking }}>
      {children}
    </BookingsContext.Provider>
  );
}

export function useBookings() {
  const context = useContext(BookingsContext);
  if (context === undefined) {
    throw new Error("useBookings must be used within a BookingsProvider");
  }
  return context;
}
