export default function NavStrip() {
  return (
    <div id="social-strip" className="w-10 h-full fixed top-0 left-0 flex flex-col items-center justify-between pt-12 pb-24 bg-[#00011C] z-10">
      <span className="rotate-270 uppercase">logicloom</span>
      <span className="block h-20">{/*spacer*/}</span>
      <span className="rotate-270 flex flex-row gap-6 uppercase">
        <a href="#hero">home</a>
        <a href="#about">about</a>
        <a href="#faq">faq</a>
      </span>
    </div>
  )
}
