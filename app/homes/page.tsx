import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { homes } from "@/lib/data"; 

export default function HomeListing() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Our housing complex</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {homes.map((home) => (
          <div
            key={home.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={home.image}
              alt={home.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{home.name}</h2>
              <p className="text-gray-600 mb-4">${home.price} per night</p>
              <Button asChild>
                <Link href={`/homes/${home.id}`}>View Details</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}