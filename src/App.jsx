import { useState } from "react";
import "./index.css";

function App() {
  const [data, setData] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
    experience: "",
    education: "",
    skills: "",
    projects: "",
    photo: ""
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setData({
          ...data,
          photo: reader.result
        });
      };

      reader.readAsDataURL(file);
    }
  };

  const printResume = () => {
    window.print();
  };

  return (
    <div className="app">

      {/* HEADER */}
      <header className="header">
        <div>
          <h1>Resume<span>Builder</span></h1>
          <p>Create a professional resume in minutes</p>
        </div>

        <button onClick={printResume} className="topBtn">
          Download Resume
        </button>
      </header>

      <div className="main">

        {/* LEFT FORM */}
        <div className="formBox">

          <h2>Build Your Resume</h2>
          <p className="subText">
            Enter your information below
          </p>

          {/* PHOTO */}
          <div className="photoSection">

            <div className="photoCircle">
              {data.photo ? (
                <img src={data.photo} alt="Profile" />
              ) : (
                "Photo"
              )}
            </div>

            <div>
              <h3>Profile Photo</h3>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhoto}
              />
            </div>

          </div>

          {/* PERSONAL */}
          <h3 className="sectionTitle">
            Personal Information
          </h3>

          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />

          <input
            name="title"
            placeholder="Job Title / Career"
            onChange={handleChange}
          />

          <div className="twoInput">

            <input
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
            />

            <input
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
            />

          </div>

          <input
            name="location"
            placeholder="City, State"
            onChange={handleChange}
          />

          {/* SUMMARY */}
          <h3 className="sectionTitle">
            Professional Summary
          </h3>

          <textarea
            name="summary"
            placeholder="Write a short professional summary..."
            onChange={handleChange}
          />

          {/* EXPERIENCE */}
          <h3 className="sectionTitle">
            Work Experience
          </h3>

          <textarea
            name="experience"
            placeholder="Company name, job role, responsibilities..."
            onChange={handleChange}
          />

          {/* EDUCATION */}
          <h3 className="sectionTitle">
            Education
          </h3>

          <textarea
            name="education"
            placeholder="Degree, college/university, year..."
            onChange={handleChange}
          />

          {/* SKILLS */}
          <h3 className="sectionTitle">
            Skills
          </h3>

          <textarea
            name="skills"
            placeholder="Java, Python, JavaScript, React, SQL..."
            onChange={handleChange}
          />

          {/* PROJECTS */}
          <h3 className="sectionTitle">
            Projects
          </h3>

          <textarea
            name="projects"
            placeholder="Project name and project description..."
            onChange={handleChange}
          />

          <button
            className="downloadBtn"
            onClick={printResume}
          >
            Download / Print Resume
          </button>

        </div>


        {/* RIGHT RESUME */}
        <div className="previewBox">

          <div className="resume">

            {/* RESUME HEADER */}
            <div className="resumeHeader">

              {data.photo && (
                <img
                  className="resumePhoto"
                  src={data.photo}
                  alt="Profile"
                />
              )}

              <div className="resumeInfo">

                <h1>
                  {data.name || "YOUR NAME"}
                </h1>

                <h3>
                  {data.title || "Professional Title"}
                </h3>

                <div className="contact">
                  <span>
                    {data.email || "email@example.com"}
                  </span>

                  <span>
                    {data.phone || "+91 9876543210"}
                  </span>

                  <span>
                    {data.location || "Your Location"}
                  </span>
                </div>

              </div>

            </div>


            {/* PROFILE */}
            <ResumeSection
              title="PROFILE"
              text={
                data.summary ||
                "Your professional summary will appear here. Add a short introduction about your skills, experience and career goals."
              }
            />


            {/* EXPERIENCE */}
            <ResumeSection
              title="EXPERIENCE"
              text={
                data.experience ||
                "Your work experience will appear here."
              }
            />


            {/* EDUCATION */}
            <ResumeSection
              title="EDUCATION"
              text={
                data.education ||
                "Your education details will appear here."
              }
            />


            {/* SKILLS */}
            <ResumeSection
              title="SKILLS"
              text={
                data.skills ||
                "Your skills will appear here."
              }
            />


            {/* PROJECTS */}
            <ResumeSection
              title="PROJECTS"
              text={
                data.projects ||
                "Your project details will appear here."
              }
            />

          </div>

        </div>

      </div>

    </div>
  );
}


function ResumeSection({ title, text }) {
  return (
    <section className="resumeSection">

      <h2>{title}</h2>

      <p>{text}</p>

    </section>
  );
}

export default App;