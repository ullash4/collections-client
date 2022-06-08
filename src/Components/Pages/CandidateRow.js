import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiPencilLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

function CandidateRow({ candidate, index }) {
  const navigate = useNavigate();
  const { _id, email, name, dateOfBirth } = candidate;
  const handleDelete = (id) => {
    const sure = window.confirm("Are sure to delete this Candidate ?");
    if (sure) {
      fetch(`https://thawing-spire-56494.herokuapp.com/candidates/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast("You delete a candidate");
          console.log(data);
        });
    }
  };

  const handleNavigate = (id) => {
    navigate(`/updatecandidates/${id}`);
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{dateOfBirth}</td>
      <td>{email}</td>
      <td>
        <select className="select px-2 select-ghost w-full max-w-xs">
          <option>Shortlist</option>
          <option>Rejected</option>
        </select>
      </td>
      <td className="flex py-7 items-center gap-5">
        <button onClick={() => handleNavigate(_id)}>
          <RiPencilLine className="text-2xl " />
        </button>

        <button onClick={() => handleDelete(_id)}>
          <RiDeleteBin6Line className="text-2xl " />
        </button>
      </td>
    </tr>
  );
}

export default CandidateRow;
