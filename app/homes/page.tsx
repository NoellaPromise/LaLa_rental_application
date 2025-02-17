import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const homes = [
  { id: 1, name: "Luxury Sedan", image: "/placeholder.svg?height=300&width=400", price: 200 },
  { id: 2, name: "Sports home", image: "/placeholder.svg?height=300&width=400", price: 300 },
  { id: 3, name: "Executive SUV", image: "/placeholder.svg?height=300&width=400", price: 250 },
  { id: 4, name: "Convertible", image: "/placeholder.svg?height=300&width=400", price: 280 },
  { id: 5, name: "Electric Luxury", image: "/placeholder.svg?height=300&width=400", price: 220 },
  { id: 6, name: "Premium Hatchback", image: "/placeholder.svg?height=300&width=400", price: 180 },
]

export default function homeListing() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Our housing complex</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {homes.map((home) => (
          <div key={home.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={home.image || "/placeholder.svg"}
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
  )
}

