import { Youtube, Facebook, Instagram } from "lucide-react";

export default function SocialStrip() {
  return (
    <div id="social-strip" className="w-10 h-full fixed top-0 right-0 flex flex-col items-center justify-between py-10 pb-12 bg-[#00011C] z-10">
      <span className="rotate-270 uppercase">paradox</span>
      <span className="flex flex-col gap-6">
        <a href="#"><Youtube strokeWidth={1.5} size={20} /></a>
        <a href="#"><Facebook strokeWidth={1.5} size={20} /></a>
        <a href="#"><Instagram strokeWidth={1.5} size={20} /></a>
      </span>
      <span className="rotate-270">#pirateGang</span>
    </div>
  )
}
