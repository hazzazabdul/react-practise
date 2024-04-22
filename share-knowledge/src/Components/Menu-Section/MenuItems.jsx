import { useLoaderData } from "react-router-dom";
import Menu from "./Menu";

const MenuItems = () => {
  const users = useLoaderData();

  return (
    <div>
      <h1 className="text-4xl text-center p-4 ">
        Total Users : {users.length}
      </h1>

      <div className="grid grid-cols-3 gap-x-4 gap-y-4 mx-auto md:max-w-screen-xl">
        {users.map((user) => (
          <Menu key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
