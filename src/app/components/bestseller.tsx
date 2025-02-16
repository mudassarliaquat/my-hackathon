import Image from "next/image";
import pic1 from "@/images/product-cover-5 (21).png";
import pic2 from "@/images/product-cover-5 (22).png";
import pic3 from "@/images/product-cover-5 (23).png";
import pic4 from "@/images/product-cover-5 (24).png";
import pic5 from "@/images/product-cover-5 (25).png";
import pic6 from "@/images/product-cover-5 (20).png";
import CardT2 from "./cards-text-2";
import cm1 from "@/images/fa-brands-1.png";
import cm2 from "@/images/fa-brands-2.png";
import cm3 from "@/images/fa-brands-3.png";
import cm4 from "@/images/fa-brands-4.png";
import cm5 from "@/images/fa-brands-5.png";
import cm6 from "@/images/fa-brands-6.png";

export default function Bestseller() {
  return (
    <div className="relative bg-[#FAFAFA] w-full py-10">
      <div className="max-w-[1440px] h-auto mx-auto">
        <div className="max-w-[1124px] py-10 flex flex-col gap-6 mx-auto">
          {/* Heading */}
          <div className="flex flex-col items-center gap-2">
            <h3 className="font-Montserrat font-bold text-2xl tracking-wide text-[#252B42]">
              BESTSELLER PRODUCTS
            </h3>
            {/* Line under the heading */}
            <div className="w-16 h-1 bg-[#dbdbdb]"></div>
          </div>

          {/* Products Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {/* Product Cards */}
            {[pic6, pic1, pic2, pic3, pic4, pic5, pic6, pic1].map((pic, index) => (
              <div
                key={index}
                className="w-[238px] h-full flex flex-col bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="relative overflow-hidden group">
                  <Image
                    src={pic}
                    alt={`product${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardT2 />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Companies Section */}
      <div className="w-full bg-[#FAFAFA] py-8">
        <div className="max-w-[1124px] mx-auto">
          {/* Logo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {[cm1, cm2, cm3, cm4, cm5, cm6].map((logo, index) => (
              <div
                key={index}
                className="flex justify-center transition-all duration-300 hover:scale-110"
              >
                <Image src={logo} alt={`Client Logo ${index + 1}`} className="h-12 w-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
