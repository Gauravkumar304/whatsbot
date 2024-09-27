
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import Marquee from "@/components/Marquee";
import Codepage from "@/components/Codepage";
import Aboutvideo from "@/components/Aboutvideo";
import Leading from "@/components/Leading";
import Support from "@/components/Support";
import Bots from "@/components/Bots";
import Feature from "@/components/Feature";
import Hybrid from "@/components/Hybrid";
import Footer from "@/components/Footer";



export default function Main() {
  return (
    <div>
     <Navbar/>
     
      <main className="">  {/* //p-8 */}
      <Home/>
      <Marquee/>
      <Aboutvideo/>
      <Leading/>
      <Codepage/>
      <Support/>
      <Bots/>
      <Feature/>
      <Hybrid/>
      <Footer/>
      </main>
    </div>
  );
}
