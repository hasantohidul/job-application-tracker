import React from "react";
import JobCard from './JobCard';
import { useSelector } from "react-redux";

/**
 * Dashboard component to display the list of job applications
 * 
 * @returns {JSX.Element} The Dashboard component
 */

function Dashboard() {
  const jobs = useSelector(state => state.jobs.jobList);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="flex flex-wrap -mx-4 justify-center md:justify-start">
        {jobs.map(job => (
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4" key={job.id}>
            <JobCard job={job} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard;