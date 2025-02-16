import Image from "next/image";
import Table from "@/images/unsplash_QANOF9iJlFs.png";
import Chair from "@/images/product-cover-5 (25).png";
import Accessories from "@/images/product-cover-5 (26).png";
import Sofa from "@/images/single-product-1-cover-2.jpg";

export default function Editors() {
  return (
    <div className="w-full flex justify-center py-10 relative bg-[#f5f5f5]">
      <div className="w-full lg:w-[1050px] flex flex-col gap-10 bg-white p-5 sm:p-10 shadow-lg rounded-lg">
        {/* Title Section */}
        <div className="flex flex-col items-center gap-3">
          <h3 className="font-Montserrat font-semibold text-2xl sm:text-3xl leading-tight text-gray-800">
            EDITOR’S PICK
          </h3>
          <p className="w-full sm:w-[347px] font-Montserrat text-sm text-gray-600 text-center">
            Discover the latest trends with our exclusive selections.
          </p>
        </div>

        {/* Images Section */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:flex lg:gap-6">
          {/* Men Image */}
          <div className="relative w-full lg:w-[510px] h-[500px] group overflow-hidden rounded-lg shadow-md">
            <Image
              src={Table}
              alt="Table"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 font-Montserrat font-bold text-gray-800 text-lg rounded-lg shadow-md transition-all duration-300 group-hover:bg-gray-200">
              Table
            </button>
          </div>

          {/* Women Image */}
          <div className="relative w-full lg:w-[240px] h-[500px] group overflow-hidden rounded-lg shadow-md">
            <Image
              src={Chair}
              alt="Chair"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 font-Montserrat font-bold text-gray-800 text-lg rounded-lg shadow-md transition-all duration-300 group-hover:bg-gray-200">
              Chair
            </button>
          </div>

          {/* Accessories & Kids */}
          <div className="flex flex-col gap-5 w-full lg:w-[240px]">
            {/* Accessories Image */}
            <div className="relative w-full h-[242px] group overflow-hidden rounded-lg shadow-md">
              <Image
                src={Accessories}
                alt="accessories"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-5 py-2 font-Montserrat font-bold text-gray-800 text-lg rounded-lg shadow-md transition-all duration-300 group-hover:bg-gray-200">
                ACCESSORIES
              </button>
            </div>

            {/* Kids Image */}
            <div className="relative w-full h-[242px] group overflow-hidden rounded-lg shadow-md">
              <Image
                src={Sofa}
                alt="sofa"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-5 py-2 font-Montserrat font-bold text-gray-800 text-lg rounded-lg shadow-md transition-all duration-300 group-hover:bg-gray-200">
                Sofa
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
