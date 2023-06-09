import Skills from "../Skills/Skills";
import ProjectsPage from "../Projects/ProjectsPage";
import AboutMe from "../AboutMe/AboutMe";
import Landing from "../Landing/Landing";
import "./Main.css"
import ProjectsIndex from "../Projects/ProjectsIndex";
import SkillsChart from "../Skills/SkillsChart";
const Main = ({portfolioData}) => {
    return (
        <>
    <div id="main-wrapper">
      <Landing portfolioData={portfolioData}/>
      <AboutMe portfolioData={portfolioData}/>
      <SkillsChart portfolioData={portfolioData}/>
      {/* <Skills portfolioData={portfolioData}/> */}
      <ProjectsIndex portfolioData={portfolioData}/>
    </div>
        </>
    );
};

export default Main;