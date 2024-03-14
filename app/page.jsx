'use client'
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { useEffect } from "react";


const HomePage = () =>{
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return(
    <div>
      <Navbar />
      <Footer />
    </div>
  )
}

export default HomePage
