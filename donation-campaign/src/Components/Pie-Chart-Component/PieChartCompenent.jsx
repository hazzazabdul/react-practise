import PropTypes from "prop-types";
import { Cell, Legend, Pie, PieChart } from "recharts";
import { getDonationFromLocalS } from "../../Utility/Local-Storage/local-storage";

const COLORS = ["#FF444A", "#00C49F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartCompenent = ({ donations }) => {
  const donationData = getDonationFromLocalS();
  const finalResult = [];

  const result = donations.reduce(
    (acc, currentItem) => {
      acc.price = (acc.price || 0) + currentItem.price;
      return acc;
    },
    { name: "Total Donation" }
  );
  finalResult.push(result);

  const newDonations = [];
  const donationFromLS = donations.filter((donation) =>
    donationData.includes(donation.id)
  );
  newDonations.push(...donationFromLS);

  const result1 = newDonations.reduce(
    (acc, currentItem) => {
      acc.price = (acc.price || 0) + currentItem.price;
      return acc;
    },
    { name: "My Donation" }
  );
  finalResult.push(result1);

  return (
    <div>
      <PieChart className="mx-auto" width={400} height={400}>
        <Pie
          data={finalResult}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          dataKey="price"
        >
          {finalResult.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend
          iconSize={20}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={{
            top: "50%",
            right: "-50%",
            transform: "translate(0, -50%)",
            lineHeight: "24px",
          }}
        />
      </PieChart>
    </div>
  );
};

PieChartCompenent.propTypes = {
  donations: PropTypes.array,
};

export default PieChartCompenent;
