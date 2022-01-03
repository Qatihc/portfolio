import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { LandingPage } from "./pages/LandingPage";
import { ProjectsPage } from "./pages/ProjectsPage";

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="projects" element={<ProjectsPage/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
