import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(-1)
  }

  return (
    <div className="text-center my-2">
      <h1 className="text-2xl ">User Name: {user.name}</h1>
      <p>Website: {user.website}</p>
      <button onClick={handleNavigate} className="p-2 hover:bg-purple-950 duration-1000 bg-purple-700 text-white rounded-lg">Go Back</button>
    </div>
  );
};

export default UserDetails;
