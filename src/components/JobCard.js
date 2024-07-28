import React from "react";
import { useDispatch } from "react-redux";
import { deleteJob } from "../redux/reducers/jobReducer";
import { useNavigate } from "react-router-dom";
import "./JobCard.css"; // Custom css for styling

/** 
* JobCard component displays job details and provides edit and delete options

*@param {object} job - The job object containing job details
*@returns {JSX.Element} The JobCard component

*/
function JobCard({ job }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handles A Job Card Deletion
  const handleDelete = () => {
    dispatch(deleteJob(job.id));
  };

  // Handle job edit
  const handleEdit = () => {
    navigate(`/edit-job/${job.id}`);
  };

  return (
    <div className="job-card mx-auto">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{job.position}</h5>
          <p className="card-text">{job.company}</p>
          <p className="card-text">
            <small>{job.status}</small>
          </p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-primary" onClick={handleEdit}>
              Edit
            </button>
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
