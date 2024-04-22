import BannerComponent from "../../Components/Banner-Component/BannerComponent";
import ButtonCompenent from "../../Components/Button-Compenent/ButtonCompenent";
import CategoriesComponent from "../../Components/Category-Section/Categories-Component/CategoriesComponent";
import FeaturedJobsCompenent from "../../Components/Featured-Jobs-Section/FeaturedJobs-Component/FeaturedJobsCompenent";
import SectionHeader from "../../Components/Section-Header/SectionHeader";

const HomePage = () => {
  return (
    <div>
      <BannerComponent />
      <div className="mt-8">
        <SectionHeader
          title="Job Category List"
          desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, quibusdam!"
        />
        <CategoriesComponent />
      </div>

      <div className="mt-8">
        <SectionHeader
          title="Featured Jobs"
          desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, quibusdam!"
        />
        <FeaturedJobsCompenent />
        <div className="my-4 text-center ">
          <ButtonCompenent title="See All Jobs" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
