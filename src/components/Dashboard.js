import React from "react";
import JobCard from "./JobCard";
import { useSelector } from "react-redux";
import "./Dashboard.css";

/**
 * Dashboard component to display the list of job applications
 *
 * @returns {JSX.Element} The Dashboard component
 */

function Dashboard() {
  const jobs = useSelector((state) => state.jobs.jobList);
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <div className="row justify-content-center justify-content-md-start">
        {jobs.map((job) => (
          <div
            className="col-auto mb-4 d-flex justify-content-center"
            key={job.id}
          >
            <JobCard job={job} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
