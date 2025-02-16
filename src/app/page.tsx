'use client'

import { useEffect, useState } from "react";
import Carausel from "./components/caraousel";
import Editors from "./components/editorspick";
import Footer from "./components/footer";
import GreenDiv from "./components/green-div";
import Lastdiv from "./components/lastdiv";
import Navbar from "./components/navbar";
import ProductCard from "./components/products-card";
import ProductCards from "./Products/page";


export default function Home() {
  // State to track if it's mounted on the client
  const [isClient, setIsClient] = useState(false);

  // Ensuring that any browser-dependent code is run only on the client
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  // We only render the components if it's the client to avoid hydration issues
  if (!isClient) {
    return null; // Or show a loading spinner until mounted
  }

  return (
    <div>
      <Navbar />
      <Carausel />
      <Editors />
      <ProductCard />
      <GreenDiv />
      <Lastdiv />
      <ProductCards/>
      <Footer />
    </div>
  );
}




