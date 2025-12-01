import { Routes, Route } from "react-router-dom";
import MoreDetails from "./pages/MoreDetails.jsx";
import Courses from "./pages/Courses.jsx";
import Projects from "./pages/Projects.jsx";
import Experience from "./pages/Experience.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import AboutMe from "./pages/AboutMe.jsx"; 
import "./Layout.css";


// Experience details
import EnergyOfficer from "./details/EnergyOfficer.jsx";
import ComputerTutor from "./details/ComputerTutor.jsx";
import CollegeAccessMentor from "./details/CollegeAccessMentor.jsx";
import AdditionalExperience from "./details/AdditionalExperience.jsx";

// Projects details
import AjalWebsite from "./details/AjalWebsite.jsx";
import YangTuchWebsite from "./details/YangTuchWebsite.jsx";
import WCFLyricsApp from "./details/WCFLyricsApp.jsx";

// Courses details
import CS134 from "./details/CS134.jsx";
import CS136 from "./details/CS136.jsx";
import MATH200 from "./details/MATH200.jsx";

// Campus involvement details
import UbuntuAdvisoryGroup from "./details/UbuntuAdvisoryGroup.jsx";


function App() {
  const courses = [
    { code: "CS 134", name: "Introduction to Computer Science", details: <CS134 />},
    { code: "CS 136", name: "Data Structures and Advanced Programming", details: <CS136 />},
    { code: "MATH 200", name: "Discrete Mathematics", details: <MATH200 /> }
  ];

  const projects = [
    {
      title: "Ajal Scholars Consultancy Web Project",
      details: <AjalWebsite />
    },
    {
      title: "Yangtuch Global Job Website",
      details: <YangTuchWebsite />
    },
    { title: "Williams Christian Fellowship Lyrics Web App",
    details: <WCFLyricsApp />}
  ];

  const current = [
    {
      role: "Member",
      organization: "Ubuntu Advisory Group (2024–present)",
      details: <UbuntuAdvisoryGroup/>
    }
  ];

  const experience = [
  {
    position: "Energy Officer (EO)",
    details: <EnergyOfficer/>
  },
  {
    position: "Computer Tutor",
    details: <ComputerTutor/>
  },
  {
    position: "College Access Mentor",
    details: <CollegeAccessMentor/>
  },
  {
    position: "Additional Experience",
    details: <AdditionalExperience/>

  }
  ];


  function handleSelect(item) {
    console.log("Selected:", item);
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main-home" element={<Home />} />
        <Route path="/aboutme" element = {<AboutMe/>} onSelect={handleSelect} />
        <Route
          path="/courses"
          element={<Courses courses={courses} onSelect={handleSelect} />}
        />
        <Route
          path="/projects"
          element={<Projects projects={projects} onSelect={handleSelect} />}
        />
        <Route
          path="/experience"
          element={<Experience experience={experience} onSelect={handleSelect} />}
        />
        <Route
          path="/experience/:id"
          element={<MoreDetails data={experience} type="Experience" />}
        />
        <Route
          path="/projects/:id"
          element={<MoreDetails data={projects} type="Project" />}
        />
        <Route
          path="/courses/:id"
          element={<MoreDetails data={courses} type="Course" />}
        />
        <Route
          path="/current/:id"
          element={<MoreDetails data={current} type="Current Role" />}
        />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
