import { Link } from "react-router-dom";
import "./Navigation.css"

export const Navigation = () => {
    return (
        <>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li>
                    <Link to={`/projects`}>Projects</Link>
                </li>
                <li><Link to="#">Gallery</Link></li>
            </ul>
        </nav>
        </>
    );
};

export default Navigation;