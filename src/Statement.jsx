const Statement = () => {
  return (
    <section className="flex flex-col gap-10 bg-gray-200 py-24 xl:flex-row xl:gap-20">
      <div className="flex h-full flex-none flex-col items-center md:items-start  md:justify-center md:pl-12">
        <img
          src="https://images.pexels.com/photos/8310631/pexels-photo-8310631.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
          className="mb-4 h-36 w-36 rounded-full object-cover object-center"
        />
        <div className="md:pl-4 ">
          <h1 className="text-4xl capitalize md:text-5xl">
            david attenhorough
          </h1>
          <h2 className="text-center text-xl capitalize text-gray-500 md:text-left">
            vide-presidante
          </h2>
        </div>
      </div>
      <div className="relative flex items-center px-2 text-2xl md:px-16 md:text-4xl">
        <p className="text-center md:text-left">
          <span className="text-4xl font-bold text-gray-400 md:mr-5 md:text-7xl">
            "
          </span>{" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          nihil consequuntur sit qui vel veniam porro ea debitis ipsa dolore
          tempore quam nemo totam omnis magnam id, soluta dolorum vitae "
        </p>
      </div>
    </section>
  );
};
export default Statement;
