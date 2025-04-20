import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import ContactPage from "./pages/contact-me";
import ProjectsPage from "./pages/projects";
import SpaceCanvas from "./components/space-canvas";
import AboutMePage from "./pages/about-me";
import ExperiencePage from "./pages/experience";
function App() {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: "#1a1a1a",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -5,
        }}
      >
        <SpaceCanvas />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/contact-me" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  );
}

export default App;
