import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Header() {
  return (
    <header className="bg-[#053262] text-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-lg font-bold text-white">
          LALA Home Rentals
        </Link>

        <div className="flex-1 mx-6 max-w-md">
          <Input
            type="text"
            placeholder="Search for homes..."
            className="w-full px-4 py-2 rounded-md text-white"
          />
        </div>

        <div className="space-x-4">
          <Link href="/login">
            <Button className="text-[#053262] bg-white ">
              Login
            </Button>
          </Link>
          <Link href="/register">
            <Button className="bg-white text-[#053262]">Register</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
