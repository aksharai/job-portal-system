import React from "react";

const Jobs = ({ jobs, setSelectedJob }) => {
  return (
    <div>
      <h2>Job Listings</h2>
      {jobs.map((job, i) => (
        <div key={i} style={{ border: "1px solid gray", margin: 10, padding: 10 }}>
          <h3>{job.title}</h3>
          <p>{job.company} - {job.location}</p>
          <button onClick={() => setSelectedJob(job)}>Apply</button>
        </div>
      ))}
    </div>
  );
};

export default Jobs;