import PropTypes from "prop-types";

const ButtonCompenent = ({ title, handleOnClick }) => {
  return (
    <button onClick={handleOnClick} className="btn border-none text-white bg-gradient-to-r from-blue-400 to-purple-400">
      {title}
    </button>
  );
};

ButtonCompenent.propTypes = {
  title: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func,
};

export default ButtonCompenent;
