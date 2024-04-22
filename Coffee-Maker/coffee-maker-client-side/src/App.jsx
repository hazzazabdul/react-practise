
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeesContainer from './components/CoffeesContainer';

const App = () => {

  const loadedCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div className="w-9/12 mx-auto py-4">
      <h1 className="text-3xl font-bold text-amber-700 text-center">All Coffees</h1>
      <div className="grid grid-cols-2 mt-4 gap-2">
        {
          coffees.map((coffee) => (
            <CoffeesContainer coffees={coffees} setCoffees={setCoffees} key={coffee._id} coffee={coffee}/>
          ))
        }
      </div>
    </div>
  );
};

export default App;