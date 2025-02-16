import Image from "next/image";
import greenman from "@/images/shop-hero-2-png-picture-1.png";

export default function GreenDiv() {
  return (
    <div className="w-full relative bg-[#23856D] rounded-lg py-16 flex justify-center">
      <div className="w-[90%] max-w-[1440px] flex flex-col lg:flex-row gap-12 items-center">
        {/* Text Section */}
        <div className="lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
          <h4 className="text-lg font-medium text-white uppercase tracking-widest">
            Summer 2022
          </h4>
          <h1 className="text-3xl lg:text-5xl font-extrabold leading-tight text-white">
            Vita Classic Product
          </h1>
          <p className="text-white text-sm lg:text-base leading-relaxed opacity-90">
            We know how large objects will act, and we understand their behavior 
            perfectly. Experience the best in quality and comfort.
          </p>
          <div className="flex flex-col lg:flex-row gap-4 items-center lg:items-start">
            <h3 className="text-2xl font-bold text-white">$17.60</h3>
            <button className="bg-[#2DC071] hover:bg-[#27A362] transition-all duration-300 rounded-md py-3 px-6 shadow-lg text-white font-semibold text-sm lg:text-base">
              ADD TO CART
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="w-[80%] lg:w-[510px] transform transition-all duration-500 hover:scale-105">
            <Image
              src={greenman}
              alt="Vita Classic Product"
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
