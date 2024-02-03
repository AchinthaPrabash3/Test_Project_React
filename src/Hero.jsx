const Text = () => {
  return (
    <p className="w-[250px] text-center text-sm text-white first-letter:uppercase md:w-[350px] md:text-left md:text-lg">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ipsum maiores
      quasi? Quis natus aut itaque nisi, ducimus debitis vel eligendi hic,
    </p>
  );
};
const Hero = () => {
  return (
    <section className="   h-fit bg-hero-image bg-cover bg-center bg-no-repeat">
      <div className="h-full w-full bg-black/40 pb-[100px] pt-24 md:pb-[260px] md:pl-12 md:pt-[180px] ">
        <h1 className="text-center text-5xl capitalize text-white md:text-left md:text-6xl lg:text-8xl">
          save nature together to protect <br /> the divercity of life on earth
        </h1>
        <div className="mt-5 flex flex-col items-center gap-y-7  md:flex-row md:gap-12">
          <Text />
          <Text />
        </div>
        <div className="group mx-auto mt-12 flex h-14 w-[180px] items-center justify-between gap-2 rounded-full bg-yellow-300  pl-1 pr-5 transition-all md:mx-0 ">
          <a
            href=""
            className="flex h-12 w-12 items-center justify-center rounded-full bg-black shadow-lg transition-all duration-300 group-hover:translate-x-[120px] group-hover:rotate-180 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
          <h2 className="text-sm uppercase transition-all group-hover:-translate-x-12">
            what we do
          </h2>
        </div>
      </div>
    </section>
  );
};
export default Hero;
