import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  const featuredhomes = [
    {
      id: 1,
      name: "Luxury Sedan",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      name: "Sports home",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      name: "Executive SUV",
      image: "/placeholder.svg?height=300&width=400",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <section className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4 text-[#053262]">
          Discover the Perfect Place to Call Home.
        </h1>
        <p className="text-md text-gray-600 mb-8">
          Browse the best rental homes tailored to your needs. Whether
          you&apos;re looking for a cozy apartment or a spacious house, we make
          finding your perfect home simple and stress-free.
        </p>
        <Button size="lg" asChild>
          <Link href="/homes">Browse Our housing complex</Link>
        </Button>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-[#053262]">Our top Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredhomes.map((home) => (
            <div
              key={home.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={home.image || "/placeholder.svg"}
                alt={home.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{home.name}</h3>
                <Button variant="outline" asChild>
                  <Link href={`/homes/${home.id}`}>View Details</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Keep on exploring our homes</h2>
        <Button asChild>
                  <Link href="">Show more</Link>
                </Button>
      </section>
    </div>
  );
}
