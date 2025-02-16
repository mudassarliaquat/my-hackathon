import Image from "next/image";
import hero from "@/images/hero.jpeg";
export default function Carousel() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
    {/* Hero Image */}
    <div className="absolute inset-0">
      <Image
        src={hero}
        alt="Hero Image"
        layout="fill" 
        objectFit="cover" 
        quality={100} 
        priority 
      />
    </div>

    {/* Content Overlay */}
    <div className="relative z-10 bg-white bg-opacity-75 p-8 shadow-lg rounded-md max-w-md text-center">
      <h1 className="text-2xl font-semibold mb-4 text-gray-900">
        Luxury homeware for people who love timeless design quality
      </h1>
      <p className="text-gray-600 mb-6">
        Shop the new Spring 2022 collection today
      </p>
      <button className="px-6 py-3 bg-gray-100 text-black rounded-md hover:bg-gray-700 hover:text-white">
        View collection
      </button>
    </div>
  </section>
  );
}
