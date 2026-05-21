import React, { useState, useEffect } from "react";
import Jobs from "./components/Jobs";
import Apply from "./components/Apply";
import CandidateDashboard from "./components/CandidateDashboard";
import EmployerDashboard from "./components/EmployerDashboard";
import AdminPanel from "./components/AdminPanel";

function App() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then(res => res.json())
      .then(data => setJobs(data));

    fetch("http://localhost:5000/applications")
      .then(res => res.json())
      .then(data => setApplications(data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Job Portal System</h1>

      <Jobs jobs={jobs} setSelectedJob={setSelectedJob} />
      <Apply job={selectedJob} />
      <CandidateDashboard applications={applications} />
      <EmployerDashboard />
      <AdminPanel />
    </div>
  );
}

export default App;