import { Link } from "react-router-dom";
import './index.scss';

const Home = () => {
    return (

        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br />I'm Diogo.
                <br />
                Front-end Developer
                </h1>
                <div className="contact-button"> 
                <Link to="/contact">
                    CONTACT ME
                </Link>
                </div>
            
            </div>
        </div>

    );
}





export default Home;