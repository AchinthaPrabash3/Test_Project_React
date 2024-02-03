const NavbarItems = [
  { name: "our agency", id: "#" },
  { name: "waht we do", id: "/WahtWeDo" },
  { name: "urban chalaenges", id: "#" },
];
const Li = ({ name, id }) => {
  return (
    <li className="group flex items-center gap-2 capitalize text-white transition-all duration-200 hover:scale-105 hover:font-semibold">
      <a href="">{name}</a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-4 w-4 transition-all duration-300 group-hover:rotate-90"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
    </li>
  );
};

const Navbar = () => {
  return (
    <header className="absolute left-1/2 right-0 mx-auto h-16 w-full -translate-x-1/2">
      <nav className="flex h-full w-full items-center justify-between px-4">
        <h1 className="text-xl capitalize text-white">
          <a href="">flouna</a>
        </h1>
        <ul className=" hidden space-x-6 md:flex">
          {NavbarItems.map((item, index) => {
            return <Li {...item} key={index} />;
          })}
          <li className="group flex items-center gap-2 capitalize text-white transition-all duration-200 hover:scale-105 hover:font-semibold">
            <a href="">contact</a>
          </li>
        </ul>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-9 w-9 stroke-white md:hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </nav>
    </header>
  );
};
export default Navbar;
