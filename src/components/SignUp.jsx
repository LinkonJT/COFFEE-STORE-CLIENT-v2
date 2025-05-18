import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Swal from 'sweetalert2';

const SignUp = () => {


const {createUser}= use(AuthContext);
console.log(createUser);

const handleSignUp = e=>{
    e.preventDefault();
  
    const form = e.target
    // const email = form.email.value,  or follow the below steps, just another way to do things
    // console.log(email);
    const formData = new FormData(form);

    // const email = formData.get("email");
    // const password = formData.get("password");

const {email, password, ...userProfile} = Object.fromEntries(formData.entries()); // Here, const userProfile = { name, address, phone, photo, ...rest };

    console.log(email, password, userProfile);

    

    /*****CREATE USER in the FIREBASE *****/
    createUser(email, password)
    .then(result=>{
        console.log(result.user)
    })
     .catch((error) => {
    console.log(error)
  });


  /****Save profile info in DB */
  fetch('http://localhost:3000/users',{
    method: 'POST',
    headers:{
      'content-type': 'application/json'
    },
    body: JSON.stringify(userProfile)
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.insertedId){
      Swal.fire({
  position: "top-end",
  icon: "success",
  title: "SignUp successFull",
  showConfirmButton: false,
  timer: 1500
});
    }
  })


}

    return (
        <div>
            <form onSubmit={handleSignUp} className="fieldset bg-base-200 border-base-300 rounded-box max-w-sm mx-auto border p-4">
  <legend className="fieldset-legend text-2xl mx-auto">signUp now!</legend>
<label className="label">Name</label>
  <input type="text" className="input" name='name' placeholder="Name" />

  <label className="label">Address</label>
<input type="text" className="input" name='address' placeholder="Address" />

  <label className="label">Phone</label>
  <input type="text" className="input" name='phone' placeholder="phone number" />
  <label className="label">Photo</label>
  <input type="text" className="input" name='photo' placeholder="photo Url" />




  
  <label className="label">Email</label>
  <input type="email" className="input" name='email' placeholder="Email" />

  <label className="label">Password</label>
  <input type="password" className="input" name='password' placeholder="Password" />
<div><a className='link link-hover'>Forgot password?</a></div>
  <button className="btn btn-neutral mt-4">SignUp</button>
</form>
        </div>
    );
};

export default SignUp;