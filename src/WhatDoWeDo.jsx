import { cardContent } from "./data";

const Card = ({ tag, description, img }) => {
  return (
    <div className="h-fit overflow-hidden rounded-md p-2 transition-all duration-200 hover:scale-95 hover:bg-gray-100">
      <img
        className=" h-[400px] w-full rounded-md object-cover md:h-[200px] lg:h-[300px] xl:h-[400px] 2xl:h-[500px] "
        src={img}
        alt=""
      />
      <p className="mt-3 text-2xl capitalize leading-tight tracking-tight md:text-xl lg:text-4xl">
        {description}
      </p>
      <p className="mt-4 w-fit rounded-full bg-gray-300 px-2 py-1">{tag}</p>
    </div>
  );
};

const WahtWeDo = () => {
  return (
    <section className="mt-24 pb-10" id="wahtWeDo">
      <div className="flex flex-col items-end justify-between px-5 md:flex-row">
        <div>
          <p className="mb-5 capitalize">what we do</p>
          <h2 className="text-5xl capitalize ">
            fostaring harmony <br /> between humanity and nature
          </h2>
        </div>
        <p className="mt-3 text-sm md:w-[500px]  md:text-right">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
          eaque ab animi voluptatibus! Eos quos expedita ullam cumque, delectus
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima,
          obcaecati. totam!
        </p>
      </div>
      <div className="mt-12 grid gap-y-5 px-5 md:grid-cols-3 md:gap-3 lg:gap-5 ">
        {cardContent.map((item, index) => {
          return <Card {...item} key={index} />;
        })}
      </div>
    </section>
  );
};
export default WahtWeDo;
