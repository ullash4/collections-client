import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function CreateCandidate() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    const {name, email, address, state, dateOfBirth, pincode}= data;
    const candidate ={
      name: name,
      email:email,
      address:address,
      dateOfBirth:dateOfBirth,
      pincode: pincode,
      state:state
    }
    fetch('http://localhost:5000/candidates',{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(candidate)
    })
    .then(res=>res.json())
    .then(result=>{
      toast('Candidate created successfully')
      console.log(result);
    })
    console.log(data)
  };
  return (
    <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 my-10">
      <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">
        Create Candidate
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label class="text-gray-700 dark:text-gray-200" >
              Name
            </label>
            <input
              {...register("name")}
              type="text"
              required
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" >
              Email
            </label>
            <input
              {...register("email")}
              required
              type="email"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" >
              Date of Birth
            </label>
            <input
              {...register("dateOfBirth")}
              required
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label
              class="text-gray-700 dark:text-gray-200"
              
            >
              State
            </label>

            <select required {...register("state")}  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
            
              <option>Andhra Pradesh</option>
              <option>Arunachal Pradesh </option>
              <option>Assam</option>
              <option>Bihar</option>
              <option>Chhattisgarh</option>
              <option>Goa</option>
              <option>Gujarat</option>
              <option>Himachal Pradesh </option>
              <option>Haryana</option>
              <option>Jharkhand</option>
              <option>Karnataka</option>
              <option>Kerala </option>
              <option>Madhya Pradesh</option>
              <option>Maharashtra</option>
              <option>Manipur</option>
              <option>Meghalaya</option>
              <option>Mizoram</option>
              <option>Nagaland</option>
              <option>Odisha</option>
              <option>Punjab</option>
              <option>Sikkim</option>
              <option>Tamil Nadu</option>
              <option>Telangana</option>
              <option>Tripura</option>
              <option>Uttar Pradesh</option>
              <option>Uttarakhand</option>
              <option>West Bengal</option>
            </select>
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" >
              Address
            </label>
            <input
              {...register("Address")}
              required
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label
              class="text-gray-700 dark:text-gray-200"
              
            >
              Pin Code
            </label>
            <input
              {...register("pinCode")}
              required
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>

        <div class="flex items-center justify-end gap-5 mt-6">
        <Link to={'/candidateslist'} class="btn btn-outline btn-primary">
            Cancel
          </Link>
          <input class="btn btn-primary" type="submit" value="Create" />
          
        </div>
      </form>
    </section>
  );
}

export default CreateCandidate;
