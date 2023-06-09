import { Link } from "react-router-dom";
import "./Navigation.css"

export const Navigation = () => {
    return (
        <>
        <nav id="nav-bar">
            <ul>
                <li>about</li>
                <li>skills</li>
                <li>projects</li>
                <li>contact</li>
            </ul>
        </nav>
        </>
    );
};

export default Navigation;