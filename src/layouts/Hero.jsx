import FilterSearch from "../utils/FilterSearch";
import herobg from "../assets/background.jpg";
function Hero() {
  return (
    <section className="w-screen h-screen overflow-hidden relative z-0">
      <div className="w-full h-full absolute top-0 left-0">
        <img src={herobg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="container w-full h-full relative z-10 flex flex-col justify-center">
        <div className="text-white">
          <p className="text-base hidden font-thin pb-8 md:block">
            Shop Online. Pickup Today. It's Fast, Simple and Easy. Learn More.
          </p>
          <p className="text-5xl font-semibold tracking-wide">
            Fast, Simple and Easy
          </p>
          <div className="mt-8 w-[50%] h-[60px] hidden md:flex bg-white items-center rounded-lg text-black dark:text-white dark:bg-black">
            <FilterSearch />
          </div>
        </div>
        <div className="flex gap-20 text-white py-4">
          {/* <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
