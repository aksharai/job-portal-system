import React, { useState } from "react";

const Apply = ({ job }) => {
  const [name, setName] = useState("");
  const [skills, setSkills] = useState("");

  const submit = () => {
    fetch("http://localhost:5000/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        jobTitle: job?.title || "",
        skills
      })
    }).then(res => res.json())
      .then(data => alert("Applied! Status: " + data.status));
  };

  if (!job) return <p>Select a job</p>;

  return (
    <div>
      <h2>Apply for {job.title}</h2>
      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Skills (React, Node)" onChange={e => setSkills(e.target.value)} />
      <button onClick={submit}>Submit</button>
    </div>
  );
};

export default Apply;