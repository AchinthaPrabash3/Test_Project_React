import { stats } from "./data";

const AboutUs = () => {
  return (
    <section
      className="flex flex-col items-center gap-4 bg-gray-200 px-2 py-12 md:px-5 lg:flex-row lg:px-3 xl:px-5 "
      id="aboutUs"
    >
      <div className="w-full lg:w-1/2">
        <p className="mb-4 capitalize">about us</p>
        <h1 className="mb-4 text-5xl capitalize md:text-6xl xl:text-7xl">
          Fauna & Flora works in <br /> nearly 50 countries <br /> around the
          world
        </h1>
        <p className="text-sm md:text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non velit
          quod tempora est nostrum, molestias suscipit expedita ea facilis
          officia atque minus quasi. Adipisci cum molestias praesentium
          voluptatum delectus nobis.
        </p>
      </div>
      <div className="grid place-content-center gap-4 gap-y-5 md:mt-8 md:grid-cols-2 lg:w-1/2">
        {stats.map((item, index) => {
          return <Stats {...item} key={index} />;
        })}
      </div>
    </section>
  );
};
const Stats = ({ stat, dic }) => {
  return (
    <div className=" flex flex-col items-start  rounded-2xl transition-all hover:scale-105  md:justify-start">
      <p className="mt-8 w-fit text-left text-8xl uppercase md:mt-5  md:text-8xl xl:text-8xl ">
        {stat}
      </p>{" "}
      <p className="pl-2 text-left text-sm  capitalize xl:w-[300px] xl:text-2xl">
        {dic}
      </p>
    </div>
  );
};
export default AboutUs;
