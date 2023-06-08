import "./Footer.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi"

export const Footer = ({portfolioData}) => {
    const { socialLinks } = portfolioData;
    const icons = [<BsGithub/>, <BsLinkedin/>]
    return (
        <section id="social-links-wrapper">
            <h1>Contact</h1>
            <div id="social-links-btns-container">
            {socialLinks.map((social, i) => {
                return (
                <a href={social.url} target="_blank">
                    {icons[i]}
                </a>
                )
            })}
            </div>
        </section>
    );
};

export default Footer;