import portfolioData from "./portfolioData";
import Landing from "./components/Landing/Landing";
import Main from "./components/Main/Main";
import { Routes, Route } from "react-router-dom";
import ProjectPage from "./components/Projects/ProjectsPage";

function App() {
  return (
    <>
    <Landing portfolioData={portfolioData}/>
    <Routes>
      <Route path="/projects" element={<ProjectPage portfolioData={portfolioData}/>} />
      <Route exact path="/" element={<Main portfolioData={portfolioData}/>} />
      
    </Routes>


    </>
  );
}

export default App;
