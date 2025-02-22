"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

export default function Header() {
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error logging out:", error.message);
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <header className="bg-[#053262] text-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/lala.png" 
            alt="LALA Home Rentals"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>

        <div className="flex items-center space-x-4">
          <Link href="/login">
            <Button
              variant="ghost"
              className="hover:text-[#053262] hover:bg-white"
            >
              Login
            </Button>
          </Link>
          <Link href="/register">
            <Button
              variant="ghost"
              className="hover:text-[#053262] hover:bg-white"
            >
              Register
            </Button>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="hover:text-[#053262] hover:bg-white"
              >
                <Menu className="h-5 w-5 mr-2" />
                Menu
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/homes" className="w-full cursor-pointer">
                  Book a house
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/my-bookings" className="w-full cursor-pointer">
                  My Bookings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/my-houses" className="w-full cursor-pointer">
                  See my houses
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/add-house" className="w-full cursor-pointer">
                  Add A New House
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleLogout}
                className="cursor-pointer"
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
}
