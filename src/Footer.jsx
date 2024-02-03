const listItems = [
  {
    name: "home",
    id: "#",
  },
  {
    name: "our agancy",
    id: "#",
  },
  {
    name: "urgent changes",
    id: "#",
  },
  {
    name: "what we do",
    id: "#wahtWeDo",
  },
  {
    name: "contact",
    id: "#",
  },
];

const Li = ({ name, id }) => {
  return (
    <li className="text-3xl first-letter:uppercase hover:scale-105 md:text-lg">
      <a href={id}>{name}</a>
    </li>
  );
};

const Footer = () => {
  return (
    <footer className="mt-12">
      <section>
        <h1 className="py-8 text-7xl capitalize md:w-[80%] md:text-8xl">
          let's save nature together for people & plants
        </h1>
        <div className="flex flex-col px-2 pb-5  md:items-center md:justify-between lg:flex-row">
          <div className="mb-4 flex items-center justify-center gap-4 md:mb-0">
            {" "}
            <a
              href=""
              className="rounded-full border border-black px-4 py-2 capitalize"
            >
              can i help ?
            </a>
            <a
              href=""
              className="rounded-full bg-lime-400 px-4 py-2 capitalize"
            >
              donate today
            </a>
          </div>
          <ul className="flex flex-col items-center space-y-4 pl-2 md:flex-row md:space-x-6 md:space-y-0">
            {listItems.map((item, index) => {
              return <Li {...item} key={index} />;
            })}
          </ul>
        </div>
      </section>
      <section className="relative h-[500px]">
        <img
          src="https://images.pexels.com/photos/12715258/pexels-photo-12715258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="absolute h-full w-full object-cover object-top"
        />
        <h1 className="absolute bottom-0 z-10 text-[150px] leading-[0.7] text-white opacity-40 md:text-[280px] lg:text-[350px] xl:text-[400px] 2xl:text-[500px]">
          Flouna
        </h1>
      </section>
    </footer>
  );
};
export default Footer;
