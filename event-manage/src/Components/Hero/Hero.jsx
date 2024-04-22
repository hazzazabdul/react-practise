import hero from "../../assets/Corporate-Event-management-compnay-in-Bangladesh.jpg";

const Hero = () => {
  return (
    <div className="w-full h-[85vh] mx-auto">
      <div className="h-full relative">
        <div className="w-full h-full absolute flex flex-col justify-center bg-gradient-to-r from-pri/55 to-sec/35">
          <span className="ml-28 font-semibold text-[#bacddb]">CORPORATE EVENTS REDEFINED</span>
          <h2 className="ml-28 text-4xl font-bold text-white uppercase leading-10">
          Experience Corporate Events <br /> Elevated To New Heights.
          </h2>
        </div>
        <img className="w-full h-full object-cover" src={hero} alt="" />
      </div>
    </div>
  );
};

export default Hero;
