import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiPencilLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function CandidateRow({ candidate, index }) {
  const { _id, email } = candidate;
  const handleDelete =(id)=>{
    console.log(id);
  }
  return (
    <tr>
      <th>{index + 1}</th>
      <td>ullash</td>
      <td>6/7/2022</td>
      <td>{email}</td>
      <td>
        <select class="select px-2 select-ghost w-full max-w-xs">
          <option>Shortlist</option>
          <option>Rejected</option>
        </select>
      </td>
      <td className="flex py-7 items-center gap-5">
        <Link to={"/createcandidate"}>
          {" "}
          <RiPencilLine className="text-2xl " />{" "}
        </Link>
        <button onClick={()=>handleDelete(_id)}>
          {" "}
          <RiDeleteBin6Line className="text-2xl " />{" "}
        </button>
      </td>
    </tr>
  );
}

export default CandidateRow;
