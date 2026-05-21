const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Job = require("./models/Job");
const Application = require("./models/Application");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/jobportal");

// Seed jobs
app.get("/seed", async (req, res) => {
  await Job.insertMany([
    { title: "Frontend Developer", company: "TCS", location: "Kochi", skills: "React" },
    { title: "Backend Developer", company: "Infosys", location: "Bangalore", skills: "Node" },
    { title: "Full Stack Developer", company: "Wipro", location: "Remote", skills: "React Node" }
  ]);
  res.send("Seeded");
});

// Get jobs
app.get("/jobs", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// Apply job + simple resume matching
app.post("/apply", async (req, res) => {
  const { name, jobTitle, skills } = req.body;

  let status = "Not Matched";
  if (jobTitle.toLowerCase().includes(skills.toLowerCase())) {
    status = "Matched";
  }

  const appData = new Application({
    name,
    jobTitle,
    skills,
    matchStatus: status
  });

  await appData.save();
  res.json({ message: "Applied successfully", status });
});

// Get applications
app.get("/applications", async (req, res) => {
  const apps = await Application.find();
  res.json(apps);
});

app.listen(5000, () => console.log("Server running on 5000"));