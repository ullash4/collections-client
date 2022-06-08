import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CandidateRow from "./CandidateRow";
import { AiOutlinePlus } from "react-icons/ai";
import Loading from "../Shared/Loading";

function CandidatesList() {
  const [candidates, setCandidates] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    fetch("https://thawing-spire-56494.herokuapp.com/candidates")
      .then((res) => res.json())
      .then((data) => {
        setIsloading(false);
        setCandidates(data);
      });
  }, [candidates]);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="lg:px-20 my-10">
      <h1 className="mb-5 text-xl font-semibold">
        Candidates List : {candidates.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra  w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date Of Birth</th>
              <th>Email</th>
              <th>Result</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate, index) => (
              <CandidateRow
                key={candidate._id}
                candidate={candidate}
                index={index}
              ></CandidateRow>
            ))}
          </tbody>
        </table>
      </div>
      <Link
        className="mt-5 max-w-xs text-2xl flex items-center gap-2 text-primary"
        to={"/createcandidate"}
      >
        {" "}
        <AiOutlinePlus className="" /> Add New Candidate{" "}
      </Link>
    </div>
  );
}

export default CandidatesList;
