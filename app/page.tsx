import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  const featuredhomes = [
    {
      id: 1,
      name: "Inyamanza nest",
      image: "/images/first-home.jpg",
    },
    {
      id: 2,
      name: "Umurage villa",
      image: "/images/second-home.jpeg",
    },
    {
      id: 3,
      name: "Inuma Estate",
      image: "/images/third-home.jpeg",
    },
  ];

  return (
    <div>
      <section className="relative w-full h-[500px] mb-20">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/keys2.jpg"
            alt="Background"
            fill
            priority
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative z-10 container mx-auto h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl font-bold mb-4 text-[#053262]">
            Welcome to LaLa home rentals
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            Your Next Home is Waiting – Start Searching Today!
          </p>
          <Button size="lg" asChild>
            <Link href="/homes">Browse Our housing complex</Link>
          </Button>
        </div>
      </section>

      <div className="container mx-auto px-6">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-[#053262]">
            Our top Listings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredhomes.map((home) => (
              <div
                key={home.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative w-full h-48">
                  <Image
                    src="/images/first_home.jpg"
                    alt={home.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority
                  />
                </div>
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
          <h2 className="text-3xl font-semibold mb-4">
            Keep on exploring our homes
          </h2>
          <Button asChild>
            <Link href="/homes">Show more</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
