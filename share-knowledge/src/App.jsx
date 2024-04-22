import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";

const App = () => {
  const navigation = useNavigation();
  console.log(navigation);

  return (
    <>
      <Navbar />
      {navigation.state === "loading" ? (
        <p className="text-2xl text-center my=-4">Loading...</p>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default App;
