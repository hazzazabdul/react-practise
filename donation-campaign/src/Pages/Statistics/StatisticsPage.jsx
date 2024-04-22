import { useLoaderData } from "react-router-dom";
import PieChartCompenent from "../../Components/Pie-Chart-Component/PieChartCompenent";


const StatisticsPage = () => {
  const donations = useLoaderData()
  return (
    <div className="py-4">
      <PieChartCompenent donations={donations}/>
    </div>
  );
};

export default StatisticsPage;
