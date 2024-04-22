import user from "/src/assets/images/user.png";
import ButtonCompenent from "../../Components/Button-Compenent/ButtonCompenent";


const BannerComponent = () => {
  return (
    <div className="flex items-center">
      <div>
        <h1 className="w-[420px] text-6xl font-bold leading-tight">
          One Step Closer To Your <h1 className="text-[#7E90FE]">Dream Job</h1>
        </h1>
        <p className="my-4 text-[#444]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
          deserunt voluptas ipsa doloremque architecto temporibus enim tempora
          reprehenderit illo ad.
        </p>
        <ButtonCompenent title="Get Started" />
      </div>
      <div>
        <img src={user} alt="user-image" />
      </div>
    </div>
  );
};

export default BannerComponent;
