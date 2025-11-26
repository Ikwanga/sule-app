import { Routes, Route } from "react-router-dom";
import MoreDetails from "./pages/MoreDetails.jsx";
import Courses from "./pages/Courses.jsx";
import Projects from "./pages/Projects.jsx";
import Interests from "./pages/Interests.jsx";
import Current from "./pages/Current.jsx";
import Experience from "./pages/Experience.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx"; 
import "./Layout.css";


// EXPERIENCE DETAILS
import EnergyOfficer from "./details/EnergyOfficer.jsx";
import ComputerTutor from "./details/ComputerTutor.jsx";
import CollegeAccessMentor from "./details/CollegeAccessMentor.jsx";

// PROJECT DETAILS
import AjalWebsite from "./details/AjalWebsite.jsx";
import YangTuchWebsite from "./details/YangTuchWebsite.jsx";
import WCFLyricsApp from "./details/WCFLyricsApp.jsx";

// COURSE DETAILS
import CS134 from "./details/CS134.jsx";
import CS136 from "./details/CS136.jsx";
import MATH200 from "./details/MATH200.jsx";
import CSCI13 from "./details/CSCI13.jsx";

// CURRENT ROLES DETAILS
import UbuntuAdvisoryGroup from "./details/UbuntuAdvisoryGroup.jsx";
import KenSAPMentor from "./details/KenSAPMentor.jsx";

// INTEREST DETAILS
import Entrepreneurship from "./details/Entrepreneurship.jsx";
import Innovation from "./details/Innovation.jsx";
import EnvironmentalPreservation from "./details/EnvironmentalPreservation.jsx";
import CulturalPreservation from "./details/CulturalPreservation.jsx";
import YouthDevelopment from "./details/YouthDevelopment.jsx";
import Leadership from "./details/Leadership.jsx";


function App() {
  const courses = [
    { code: "CS 134", name: "Introduction to Computer Science", details: <CS134 />},
    { code: "CS 136", name: "Data Structures and Advanced Programming", details: <CS136 />},
    { code: "MATH 200", name: "Discrete Mathematics", details: <MATH200 /> },
    { code: "CSCI 13", name: "UX(User Experience) Design", details: <CSCI13 /> }
  ];

  const projects = [
    {
      title: "Ajal Scholars Consultancy Web Project",
      description: "Designed content strategy and web architecture",
      details: <AjalWebsite />
    },
    {
      title: "Yangtuch Global Job Website",
      description:
        "Led UX and site struture design",
      details: <YangTuchWebsite />
    },
    { title: "Williams Christian Fellowship Lyrics Web App",
      description: "Building a web app for worship sessions", 
    details: <WCFLyricsApp />}
  ];

  const interests = [
    {title: "Entrepreneurship", details: <Entrepreneurship />}, 
    {title: "Innovation", details: <Innovation /> },
    {title: "Environmental preservation", details:<EnvironmentalPreservation />},
    {title: "Cultural preservation", details: <CulturalPreservation />},
    {title: "Youth development", details: <YouthDevelopment />},
    {title: "Leadership", details: <Leadership />}
  ];

  const current = [
    {
      role: "Member",
      organization: "Ubuntu Advisory Group (2024–present)",
      details: <UbuntuAdvisoryGroup/>
    },
    {
      role: "College Access Mentor",
      organization: "KenSAP (Summer 2025)",
      details: <KenSAPMentor/>
    }
  ];

  const experience = [
  {
    position: "Energy Officer (EO)",
    context: "Sunking Solar – Saboti, Kenya (Nov 2023 – Feb 2024)",
    details: <EnergyOfficer/>
  },
  {
    position: "Computer Tutor",
    context: "County Government of West Pokot – Kapenguria, Kenya (Feb – June 2024)",
    details: <ComputerTutor/>
  },
  {
    position: "College Access Mentor",
    context: "Kenya Scholar Access Program (KenSAP) – Eldoret, Kenya (June – August 2025)",
    details: <KenSAPMentor/>
  }
  ];


  function handleSelect(item) {
    console.log("Selected:", item);
  }

  return (
    <div>
      <Header />
      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />
        <Route path="/main-home" element={<Home />} />
        
        {/* PAGES */}
        <Route
          path="/courses"
          element={<Courses courses={courses} onSelect={handleSelect} />}
        />
        <Route
          path="/projects"
          element={<Projects projects={projects} onSelect={handleSelect} />}
        />
        <Route
          path="/interests"
          element={<Interests interests={interests} onSelect={handleSelect} />}
        />
        <Route
          path="/current"
          element={<Current current={current} onSelect={handleSelect} />}
        />
        <Route
          path="/experience"
          element={<Experience experience={experience} onSelect={handleSelect} />}
        />
        {/* DETAIL PAGES (must be inside Routes) */}
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
          path="/interests/:id"
          element={<MoreDetails data={interests} type="Interest" />}
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
