import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

function UpdateCandidate() {
    const { register, handleSubmit } = useForm();
    const [candidate, setCandidate] = useState({})
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [state, setState] = useState("");
    const [address, setAddress] = useState("");
    const [pincode, setPincode] = useState("");
    const {id} = useParams()
    useEffect(()=>{
        fetch(`http://localhost:5000/candidate/${id}`)
        .then(res=>res.json())
        .then(data=>setCandidate(data))
    },[id])
    const onSubmit =(data)=>{
        const {name, email, address, state, dateOfBirth, pincode}= data;
        const updatedCandidate={
            name: name || candidate.name,
      email:email || candidate.email,
      address:address || candidate.address,
      dateOfBirth:dateOfBirth || candidate.dateOfBirth,
      pincode: pincode || candidate.pincode,
      state:state || candidate.state,
        }
        fetch(`http://localhost:5000/candidate/${id}`,{
            method: "PUT",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedCandidate)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            toast.success("You made cange")
        })
        console.log(updatedCandidate);
    }
  return (
    <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 my-10">
      <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">
        Update Candidate {candidate.name}
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
              value={name ||candidate.name}
              onChange={(e) => setName(e.target.value)}
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
              value={email || candidate.email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={dateOfBirth ||candidate.dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
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

            <select
             required
              value={state || candidate.state}
              onChange={(e) => setState(e.target.value)}
              {...register("state")}
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
            
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
              {...register("address")}
              required
              value={address||candidate.address}
              onChange={(e) => setAddress(e.target.value)}
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
              {...register("pincode")}
              required
              value={pincode || candidate.pincode}
              onChange={(e) => setPincode(e.target.value)}
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>

        <div class="flex items-center justify-end gap-5 mt-6">
        <Link to={'/candidateslist'} class="btn btn-outline btn-primary">
            Cancel
          </Link>
          <input class="btn btn-primary" type="submit" value="Update" />
          
        </div>
      </form>
    </section>
  )
}

export default UpdateCandidate