import React from 'react';
import { useLoaderData } from 'react-router'; // Use `react-router-dom` not `react-router`

const CoffeeDetails = () => {
    const coffee = useLoaderData();

if (!coffee) {
 return <div>Loading...</div>; }

const { name, price, quantity, photo} = coffee;

return (
<div className="p-8 max-w-xl mx-auto">
<img src={photo} alt={name} className="w-full rounded-lg mb-6" />
<h2 className="text-2xl font-bold mb-2">{name}</h2>
<p><strong>Price:</strong> ${price}</p>
<p><strong>Quantity:</strong> {quantity}</p>

</div>
);
};

export default CoffeeDetails;