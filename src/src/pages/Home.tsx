import NavStrip from "../components/NavStrip";
import SocialStrip from "../components/SocialStrip";
import { MapPin, MenuIcon } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import FAQAccordion from "../components/FAQAccordion";
import Footer from "../components/Footer";
import About from "../components/About";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 768) { setShowNav(_e => true) }
  }, [])

  useGSAP(() => {
    if (window.innerWidth > 768) {
      gsap.to(".pirate-ship", {
        xPercent: -90,
        scrollTrigger: {
          trigger: ".pirate-ship",
          start: "top 2%",
          end: "bottom top",
          scrub: true,
          pin: false,
          markers: false,
        }
      });
    }
  })


  return (
    <div id="homepage">
      {/* hero section */}
      <div id="hero" className="overflow-x-hidden h-[100vh] flex flex-row items-start justify-between">
        <button className="fixed mix-blend-difference p-4 z-20 md:hidden" onClick={() => setShowNav(e => !e)}><MenuIcon /></button>
        <span className={showNav ? 'block' : 'hidden'}><NavStrip /></span>
        <div className="w-full flex flex-col md:flex-row justify-evenly">
          <div className="w-full grid place-items-center">
            <img src="pirate.png" alt="image of a pirate ship" className="pirate-ship w-[80vw] pt-14 md:pt-6 md:w-[40vw] pr-6 saturate-[.8]" />
          </div>
          <div className="w-full pt-20 lg:pt-64 pl-12">
            <h1 className="uppercase new-rocker-regular text-2xl md:text-5xl mb-4">logic loom 4.0</h1>
            <h2 className="capitalize font-bold mb-2">may - june 2024 <span className="inline-flex items-baseline"><MapPin className="inline-block" size={16} /></span> hybrid</h2>
            <p className="w-[400px] text-xl md:text-2xl italic mb-12">Think Beyond, Sail the Mysteries...</p>
            <button id="register" className="golden-btn">register now</button>
          </div>
        </div>
        <SocialStrip />
      </div>

      {/* faq section */}
      <FAQAccordion />

      {/* about section */}
      <About />

      {/* footer section */}
      <Footer />
    </div>
  )
}

