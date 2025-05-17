import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();

  /**
   *
   * const form = e.target;
   * 
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const price = form.price.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = { name, quantity, supplier, taste, category, details, photo };
   */
    const form = e.target;
    //taken from pure JavaScript (usefull to deall with larger forms)
    //taken from pure JavaScript (useful to deal with larger forms)
    const formData = new FormData(form);
    const newCoffee= Object.fromEntries(formData.entries());
    console.log(newCoffee)

    /****(1) */
    //send coffee data to the db (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
    fetch('http://localhost:3000/coffees',{
method: 'POST',
headers: {
  'content-type': 'application/json'
},
body: JSON.stringify(newCoffee)
    })
    .then(res=>res.json())
    .then(data=>{
      if (data.insertedID){
//  console.log('after adding coffee to db', data);
 console.log('added succesfully')
Swal.fire({
  title: "Coffee added successfully!",
  icon: "success",
  draggable: true
});

// form.reset()
      }
     
    })

  };
  return (
    <div className="p-24">
      <div className="p-12 text-center">
        <h1 className="text-6xl">Add New Coffee</h1>
        <p>
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form onSubmit={handleAddCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* F 1 */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Coffee name"
              name="name"
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
          />
        </fieldset>

        <input type="submit" className="btn w-full" value="Add Coffee" />
      </form>
    </div>
  );
};

export default AddCoffee;
