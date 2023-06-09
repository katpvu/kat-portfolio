import Typical from 'react-typical';
import "./AboutMe.css"

const AboutMe = ({portfolioData}) => {
    const { aboutMe } = portfolioData;
    return (
        <>
        <header id="about-me-wrapper">
            <div>
                <h1 className="header-title">About Me </h1>
                <p>Hi there! I am a full-stack web developer who finds thrill in designing and developing web applications from scratch. With a blend of creativity and technical expertise, <span style={{fontWeight: '600'}} >I thrive on the excitement of transforming ideas into functional and visually appealing websites.</span> I have a deep appreciation for the art of design, constantly seeking innovative ways to create user-friendly interfaces that enhance the overall user experience.</p>
                {/* <p>{aboutMe.aboutme}</p> */}
            </div>
            
            
            <Typical
                    steps={['Hello', 1000, 'Hello world!', 500]}
                    loop={Infinity}
                    wrapper="p"
                />
            <h2>In my free time, I also find immense joy in the art of crochet and knitting. For me, these crafts are more than just hobbies; <span style={{fontWeight: '600'}} >they are gateways to a world of creativity, expression, and endless possibilities.</span> From a simple ball of yarn, I am able to make it into a beautiful, functional piece, very similar to how I can create web applications with code!</h2>
        </header>
        </>
    );
};

export default AboutMe;