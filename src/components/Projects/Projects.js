import "./Projects.css";

import { Link } from "react-router-dom";

const Projects = ({portfolioData}) => {
    const { projects } = portfolioData;
    return (
        <>
        <section id="projects-wrapper">
            <h1 className="subheading">PROJECTS</h1>
            <div id="projects-container">
            {projects && projects.map((project, i) => (
                <Link to={{pathname: `/projects`}}  state={{num: i}} className="project-card">
                    <img className="project-thumb" src={project.imgurl} alt={project.name} />
                    {/* <div>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        <h3>Techstack:</h3>
                        <Skills portfolioData={portfolioData} techstack={project.techstack}/>
                        <div className="btns-container">
                            <a href={project.liveLink} target="_blank" className="projects-btn">Live <BsBoxArrowUpRight /></a>
                            <a href={project.sourceCode} target="_blank" className="projects-btn"><TfiGithub /> Source Code</a>
                        </div>
                    </div> */}
                </Link>
            ))}
            </div>
        </section>
        </>
    );
};

export default Projects;