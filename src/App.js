import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import { NavBar } from "./components/NavBar";
import { ScrollToTopOnRouteChange } from "./components/ScrollToTopOnRouteChange";
import { LandingPage } from "./pages/LandingPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { AboutPage } from "./pages/AboutPage";
import { Footer } from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <div className="main-container">
      <NavBar />
      <main>
        <ScrollToTopOnRouteChange />
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="projects" element={<ProjectsPage/>}/>
          <Route path="about" element={<AboutPage/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
