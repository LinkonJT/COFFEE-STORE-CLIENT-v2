import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {

//  const coffees = useLoaderData();
//  console.log(coffees)

 /**to delete from the UI when clicked cross/remove */
  const initialCoffees = useLoaderData();
 const [coffees, setCoffees] = useState(initialCoffees)

    return (

        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    coffees.map((coffee)=><CoffeeCard 
                    key={coffee._id} 
                    coffee={coffee}
                    coffees={coffees}
                    setCoffees={setCoffees}>
                    </CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;