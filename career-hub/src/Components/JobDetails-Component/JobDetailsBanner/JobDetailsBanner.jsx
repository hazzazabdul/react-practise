
import  PropTypes from 'prop-types';

const JobDetailsBanner = ({title}) => {
  return (
    <div className="bg-[#F9F9FF] p-4">
      <h1 className="text-4xl text-center">{title}</h1>
    </div>
  );
};

JobDetailsBanner.propTypes = {
  title: PropTypes.string
}

export default JobDetailsBanner;
