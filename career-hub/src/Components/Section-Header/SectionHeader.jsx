import PropTypes from "prop-types";

const SectionHeader = ({ title, desc }) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      <p>{desc}</p>
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default SectionHeader;
