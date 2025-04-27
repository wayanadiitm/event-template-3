import qr from "../assets/qr.png";

export default function Footer() {
  const usefulDocs = [
    {
      text: "Brochure",
      path: "/brochure",
    },
    {
      text: "Guidelines & Rule Book",
      path: "/guidelines-and-rule-book",
    },
    {
      text: "Event Website",
      path: "/event-website",
    },
    {
      text: "Reaching IITM",
      path: "/reaching-iitm",
    },
    {
      text: "Campus Map",
      path: "/campus-map",
    },
  ];

  const sitemap = [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "Participants App",
      path: "/participants-app",
    },
    {
      text: "Meet Our Speakers",
      path: "/meet-our-speakers",
    },
    {
      text: "Meet Our Teams",
      path: "/meet-our-teams",
    },
  ]


  return (
    <footer className="bg-[#00011C] w-full h-52 grid place-items-center">
      <div className="flex flex-row w-4xl justify-between">
        {/* qr */}
        <div>
          <a href="/" className="inline-block text-lg font-bold mb-2">
            Logic Loom 4.0
          </a>
          <img src={qr} alt="qr" className="w-30 rounded" />
        </div>

        {/* links */}
        <nav className="flex flex-row gap-10">
          <div>
            <h3 className="text-lg font-bold">Useful Docs</h3>
            <hr className="border-none h-0.5 my-0.5 bg-[#3dbad2]" />
            <ul>
              {usefulDocs.map(el => (
                <li><a href={el.path}>{el.text}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Site Map</h3>
            <hr className="border-none h-0.5 my-0.5 bg-[#3dbad2]" />
            <ul>
              {sitemap.map(el => (
                <li><a href={el.path}>{el.text}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">General Queries</h3>
            <hr className="border-none h-0.5 my-0.5 bg-[#3dbad2]" />
            <p>
              Event Organizers,
              <br />
              LogicLooM 4.0, Technicals,
              <br />
              Paradox 2025
              <br />
              Email: logicloom@ds.study.iitm.ac.in
            </p>
          </div>
        </nav>
      </div>
    </footer>
  );
}
