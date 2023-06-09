
import "./Landing.css"
import Footer from '../Footer/Footer';

const Landing = ({portfolioData}) => {
    const { aboutMe } = portfolioData;

    return (
        <>
        <section id="landing-root">
            <div id="landing-top">
                {/* <div id="profile-img">
                    <img src={aboutMe.profileImgUrl} alt="profile"/>
                </div> */}
                <h1 id="initials" className="header">{aboutMe.initials}.</h1>
                <h1 id="role">{aboutMe.role}</h1>
            </div>
            <div id="landing-bottom">
                <div className="full-flex-row">
                    <div id="landing-image-container">
                        {/* <img src={aboutMe.profileImgUrl} /> */}
                        <img src={aboutMe.landingImageUrl} />
                    </div>
                    <h1>{aboutMe.name}</h1>
                </div>
                <div className="full-flex-row">
                    <p>Loremasdjoaisdjasiodsaodjiosadjoiasjdoiasdjaos</p>
                </div>

            </div>
            {/* <Footer portfolioData={portfolioData}/> */}
        </section>
        </>
    );
};

export default Landing;