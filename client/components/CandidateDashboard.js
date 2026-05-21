import React from "react";

const CandidateDashboard = ({ applications }) => {
  return (
    <div>
      <h2>Candidate Dashboard</h2>
      {applications.map((a, i) => (
        <p key={i}>
          {a.name} applied for {a.jobTitle} → {a.matchStatus}
        </p>
      ))}
    </div>
  );
};

export default CandidateDashboard;