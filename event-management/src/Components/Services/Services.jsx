import PropTypes from "prop-types";
import SingleService from "./SingleService";

const Services = ({ services }) => {
  return (
    <div className="max-w-6xl mx-auto my-14">
      <h2 className="text-3xl font-montserrat font-bold mb-6 text-center">
        Our Services
      </h2>
      <div className="grid grid-cols-3 gap-x-6 gap-y-10">
        {services.map((service) => (
        <SingleService key={services.id} service={service}/>
        ))}
      </div>
    </div>
  );
};

Services.propTypes = {
  services: PropTypes.array,
};

export default Services;
