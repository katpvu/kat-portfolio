import "./Footer.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiOutlineMail, HiOutlineNewspaper } from "react-icons/hi";
import { FaAngellist } from "react-icons/fa"

export const Footer = ({portfolioData, nav=false}) => {
    const { socialLinks } = portfolioData;
    const icons = [<BsGithub/>, <BsLinkedin/>, <HiOutlineMail/>, <FaAngellist />, <HiOutlineNewspaper />]
    return (
        <section id="contact">
            {!nav && <h1 className="header-title">Contact</h1>}
            <div id="social-links-btns-container" className={nav ? "column" : "row"}>
            {socialLinks.map((social, i) => {
                return (
                <a href={social.url} target="_blank">
                    {icons[i]}<br></br>
                    {!nav && <p>{social.name}</p>}
                </a>
                )
            })}
            </div>
        </section>
    );
};

export default Footer;