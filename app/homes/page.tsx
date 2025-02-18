import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const homes = [
  { id: 1, name: "Luxury Villa", image: "/images/first_home.jpg", price: 200 },
  {
    id: 2,
    name: "Modern Apartment",
    image: "/images/second_home.jpeg",
    price: 300,
  },
  {
    id: 3,
    name: "Executive Suite",
    image: "/images/third_home.jpeg",
    price: 250,
  },
  {
    id: 4,
    name: "Evergreen EState",
    image: "/images/fourth_home.jpg",
    price: 280,
  },
  {
    id: 5,
    name: "Parkview Terrace",
    image: "/images/fifth_home.jpg",
    price: 220,
  },
  {
    id: 6,
    name: "The Maple Haven",
    image: "/images/sixth_home.jpg",
    price: 180,
  },
  {
    id: 7,
    name: "Birchwood Place",
    image: "/images/seventh_home.jpg",
    price: 180,
  },
  {
    id: 8,
    name: "River side lodge",
    image: "/images/eight_home.jpg",
    price: 180,
  },
  {
    id: 9,
    name: "Pine Valley Home",
    image: "/images/nineth_home.jpg",
    price: 180,
  },
  {
    id: 10,
    name: "Magnolia court",
    image: "/images/tenth_home.jpg",
    price: 180,
  },
  {
    id: 11,
    name: "Paramount House",
    image: "/images/eleventh_home.jpg",
    price: 180,
  },
  {
    id: 12,
    name: "Sanitas House",
    image: "/images/twelveth_home.jpg",
    price: 180,
  },
  {
    id: 13,
    name: "st.Augustin Villa",
    image: "/images/thirteenth_home.jpg",
    price: 180,
  },
  {
    id: 14,
    name: "Intashya Nest",
    image: "/images/fourteenth_home.jpg",
    price: 180,
  },
  {
    id: 15,
    name: "Umusambi villa",
    image: "/images/fifth_home.jpg",
    price: 180,
  },
];

export default function homeListing() {
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
