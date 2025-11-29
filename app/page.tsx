export default function Home() {

    const SECTION = "flex-1 bg-black rounded-lg m-[10px] p-4 lg:p-5 [box-shadow:0_4px_8px_rgb(0,0,0)] [font-family:system-ui,_Avenir,_Helvetica,_Arial,_sans-serif] text-[rgb(163,173,194)] motion-reduce:animate-none motion-reduce:transition-none";
  const H1 = "mt-0 text-[28px] pb-[10px] lg:text-[28px]";
  const DIV = "flex flex-col items-center text-center gap-4 w-full text-[20px]";
  const IMG = "w-100 h-100 rounded-full";

  const NAV = "text-gray-400 text-sm mb-4";
  const OL = "flex flex-wrap items-center gap-1";
  const LI = "flex items-center";

  return (
    <section className={SECTION}>
      <nav className={NAV}>
        <ol className={OL}>
          <li className={LI}>
            <span>Home</span>
          </li>
        </ol>
      </nav>
      <h1 className={H1}>Home</h1>
      <div className={DIV}>
        <img src="alex.png" alt="Alex Mendez" className={IMG} />
        Hello, my name is Alex Mendez, and I am someone who finds deep peace in fishing, where my mind, body, and soul feel perfectly aligned. I love technology because it lets me be creative, whether I’m building PCs or crafting clean, functional websites. I’ve traveled to places like Hawaii, Germany, South Africa, and many states across the U.S., and each trip has shaped how I see the world. I’m driven in my career, working toward my bacherlor's degree here at Fullsail. I enjoy cooking, especially Gordon Ramsay’s lobster risotto, and I unwind with music ranging from country to reggaeton and blues. I’m building a future centered on family, education, financial stability, and meaningful work that allows me to give back to the people I care about.
      </div>
    </section>
  );
}
