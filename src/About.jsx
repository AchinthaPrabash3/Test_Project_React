const AboutSection = () => {
  return (
    <section
      className="flex flex-col justify-between pl-3 pt-14 md:flex-row md:pb-20"
      id="AboutSection"
    >
      <h1 className="flex-none pb-5 pt-1 text-2xl capitalize md:w-[200px] md:pl-10 md:text-xl lg:w-[300px] lg:pl-14">
        about us
      </h1>
      <div>
        <p className="w-fit text-start text-3xl font-light text-gray-400 md:text-4xl lg:text-6xl">
          <span className="capitalize text-black">
            our shared purpose is to protect the divercity of life on earth.
          </span>
          we work closely with local conservation partners in 48 countries to
          save nature together
        </p>
      </div>
    </section>
  );
};
export default AboutSection;
