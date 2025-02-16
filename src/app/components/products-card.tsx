import Image from "next/image";
import picture1 from "@/images/product-cover-5.png";
import CardText from "./cards-text";
import pic2 from "@/images/product-cover-5 (1).png";
import pic3 from "@/images/product-cover-5 (2).png";
import pic4 from "@/images/product-cover-5 (3).png";
import pic5 from "@/images/product-cover-5 (4).png";
import pic6 from "@/images/product-cover-5 (5).png";
import pic7 from "@/images/product-cover-5 (6).png";
import pic8 from "@/images/product-cover-5 (7).png";

export default function ProductCard() {
  return (
    <div className="w-full flex justify-center bg-[#f9f9f9] py-16">
      <div className="max-w-[1124px] flex flex-col gap-12">
        {/* Text Section */}
        <div className="text-center">
          <h4 className="text-gray-500 text-lg">Featured Products</h4>
          <h3 className="text-2xl font-bold text-gray-900">BESTSELLER PRODUCTS</h3>
          <p className="text-sm text-gray-500 mt-2">Problems trying to resolve the conflict between</p>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[picture1, pic2, pic3, pic4, pic5, pic6, pic7, pic8].map((pic, index) => (
            <div
              key={index}
              className="w-full max-w-[250px] bg-white rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              {/* Image Section */}
              <div className="relative w-full">
                <Image
                  src={pic}
                  alt={`product image ${index + 1}`}
                  layout="intrinsic"
                  width={250} 
                  height={350} 
                  className="rounded-t-lg"
                  quality={100} // Ensures high-resolution rendering
                />
              </div>
              {/* Card Text Section */}
              <div className="p-4">
                <CardText />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
