import NewsItem from "../../Components/News Item/NewsItem";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import LatestNews from "./LatestNews";
import {useLoaderData} from "react-router-dom"

const Home = () => {

  const news = useLoaderData()

  return (
    <div className="font-poppins">
      <Header />
      <LatestNews />
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <LeftSideNav />
        </div>
        <div className="md:col-span-2">
          <div className="p-4">
            <h2>Dragon News Home</h2>
            <div>
              {news.map((newsItem) => (
                <NewsItem key={newsItem._id} newsItem={newsItem} />
              ))}
            </div>
          </div>
        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
