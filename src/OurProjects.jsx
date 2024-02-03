import { projects } from "./data";

const Containers = ({ img, dis }) => {
  return (
    <div
      style={{
        backgroundImage: `url('${img}')`,
      }}
      className="group flex h-[300px] origin-center items-end rounded-xl  bg-cover bg-center p-2 transition-all duration-300 ease-in-out hover:h-[600px] md:hover:bg-top lg:h-full lg:w-1/3 lg:hover:h-full lg:hover:w-[60%]"
    >
      <div className=" rounded-2xl bg-black/50 p-4 backdrop-blur">
        {" "}
        <h1 className="py-2 text-3xl font-light text-white first-letter:uppercase">
          {dis}
        </h1>
        <p className="hidden text-sm text-white transition-all hover:delay-700 group-hover:block lg:w-[80%]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
          omnis ipsum dolor officiis accusamus earum amet fugit eos veniam
          doloremque? Amet quae, ullam voluptas dignissimos ratione obcaecati
          maxime? Iusto, enim!
        </p>
        <button className="mt-4  rounded-full bg-white px-4 py-2 ">
          more details
        </button>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="pt-20">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between md:px-4">
        <div>
          <p className="pl-1 text-lg capitalize">our project</p>
          <h1 className="mb-5 text-6xl capitalize md:mb-0">
            discover our global <br /> conservation projects
          </h1>
        </div>
        <a
          href=""
          className="w-fit rounded-full bg-lime-300 px-4 py-2 text-2xl capitalize"
        >
          see more
        </a>
      </div>
      <div className="mt-8 flex w-full flex-col gap-5 p-2 lg:h-[700px] lg:flex-row">
        {projects.map((item) => {
          return <Containers {...item} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
