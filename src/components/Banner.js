import logo from "../assets/images/logo.jpg";
import './Banner.js'
import './Banner.css'

const Banner = () => {
    return (
        <>
            <div className="banner">
                <ul>
                    <li>
                        <img
                            src={logo}
                            alt="Logo"
                        />
                    </li>
                    <li className="topic">
                        <span>Find Your Meal!</span>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Banner