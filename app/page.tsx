import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { homes } from "@/lib/data"; 

export default function Home() {
  // Get the first 3 homes for featured homes
  const featuredHomes = homes.slice(0, 3);

  return (
    <div>
      <section className="relative w-full h-[500px] mb-8">
        <div className="absolute inset-0 w-full h-full">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/our_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="relative z-10 container mx-auto h-full flex flex-col items-center justify-center text-center">
          <div className="bg-white/10 p-8 rounded-lg ">
            <h1 className="text-4xl font-bold mb-4 text-[#053262]">
              WELCOME TO LALA HOME RENTALS
            </h1>
            <p className="text-3xl text-gray-700 font-bold mb-8">
              Your next home is waiting – Start Searching Today!
            </p>
            <Button size="lg" asChild>
              <Link href="/homes">Browse Our housing complex</Link>
            </Button>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-6">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-[#053262] text-center">
            Our top Listings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredHomes.map((home) => (
              <div
                key={home.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={home.image}
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
