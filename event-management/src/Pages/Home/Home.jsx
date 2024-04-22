import { useLoaderData } from "react-router-dom";
import Hero from "../../Components/Hero/Hero";
import Services from "../../Components/Services/Services";
import Introduction from "../../Components/What We Do/Introduction";
import RecentEvents from "../../Components/RecentEvents/RecentEvents";

const Home = () => {
  const services = useLoaderData();

  return (
    <>
      <Hero />
      <Introduction />
      <Services services={services} />
      <RecentEvents/>
    </>
  );
};

export default Home;
