import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import AboutMe from "../AboutMe/AboutMe";
const Main = ({portfolioData}) => {
    return (
        <>
    <div className="right">
      <AboutMe portfolioData={portfolioData}/>
      <Skills portfolioData={portfolioData}/>
      <Projects portfolioData={portfolioData}/>
    </div>
        </>
    );
};

export default Main;