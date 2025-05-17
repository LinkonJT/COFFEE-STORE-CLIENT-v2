import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

// const coffee = useLoaderData();
const {_id, name, price, supplier, taste, quantity, details, photo} = useLoaderData();


    const handleUpdateCoffee = (e) =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form); //javaScript function
        const updatedCoffee = Object.fromEntries(formData.entries()) //javaScript function
        console.log(updatedCoffee);

        /*****(7) send updated coffee to the DB **** */
        
fetch( `http://localhost:3000/coffees/${_id}`, {
    method: "PUT",
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(updatedCoffee)
})
.then(res=>res.json())
.then(data=>{
    if(data.modifiedCount){
        Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Coffe order updated succesfully",
  showConfirmButton: false,
  timer: 1500
});
    }
})


    }
    return (
         <div className="p-24">
      <div className="p-12 text-center">
        <h1 className="text-6xl">Update Cofee</h1>
       
      </div>
      <form onSubmit={handleUpdateCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* F 1 */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Coffee name"
              name="name"
              defaultValue={name}
            />
          </fieldset>
          {/* F2 */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Quantity</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Quantity name"
              name="quantity"
              defaultValue={quantity}
            />
          </fieldset>
          {/* F 3 */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Supplier</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Supplier name"
              name="supplier"
              defaultValue={supplier}
            />
          </fieldset>
          {/* F 4 */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Taste</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Coffee taste"
              name="taste"
              defaultValue={taste}
            />
          </fieldset>
          {/* F5 */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">

            <label className="label">Price</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter Coffee Price"
              name="price"
              defaultValue={price}
            />
          </fieldset>
          {/* F6 */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Details</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter Coffee Details"
              name="details"
              defaultValue={details}
            />
          </fieldset>
        </div>

        {/* for photo url */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 my-6">
          <label className="label"> Photo
          </label>
          <input
            type="text"
            className="input w-full"
            placeholder="Photo URL"
            name="photo"
            defaultValue={photo}
          />
        </fieldset>

        <input type="submit" className="btn w-full" value="Update Coffee" />
      </form>
    </div>
  );

};

export default UpdateCoffee;