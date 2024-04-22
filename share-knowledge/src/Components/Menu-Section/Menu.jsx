import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Menu = ({ user }) => {
  const { id, name, email, website } = user;
  return (
    <div className=" text-center border-2 border-violet-950 p-4 rounded-lg">
      <h2 className="text-xl">Name: {name}</h2>
      <p>Email: {email}</p>
      <p>Website: {website}</p>
      <Link to={`/user/${id}`}>
        <button className="p-2 hover:bg-purple-950 duration-1000 bg-purple-700 text-white rounded-lg">
          Details
        </button>
      </Link>
    </div>
  );
};

Menu.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Menu;
