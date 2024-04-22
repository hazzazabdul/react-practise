import PropTypes from "prop-types";

const SecondaryButton = ({ title }) => {
  return (
    <button className="border border-[#7E90FE] px-4 py-1 rounded-md text-[#7E90FE]">
      {title}
    </button>
  );
};

SecondaryButton.propTypes = {
  title: PropTypes.string,
};

export default SecondaryButton;
