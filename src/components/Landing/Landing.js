
import "./Landing.css"
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
const Landing = ({portfolioData}) => {
    const { aboutMe } = portfolioData;

    return (
        <>
        <section id="landing-root">
            <div>
                <div id="profile-img">
                    <img src={aboutMe.profileImgUrl} alt="profile"/>
                </div>
                <h1>{aboutMe.name}</h1>
            </div>
            <Navigation />
            <Footer portfolioData={portfolioData}/>
        </section>
        </>
    );
};

export default Landing;