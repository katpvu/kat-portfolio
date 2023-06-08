import Typical from 'react-typical';
import "./AboutMe.css"

const AboutMe = ({portfolioData}) => {
    const { aboutMe } = portfolioData;
    return (
        <>
        <header id="about-me-wrapper">
            <h1 className="subheading">About Me</h1>
            
            <Typical
                    steps={['Hello', 1000, 'Hello world!', 500]}
                    loop={Infinity}
                    wrapper="p"
                />
            <h2>{aboutMe.aboutme}</h2>
        </header>
        </>
    );
};

export default AboutMe;