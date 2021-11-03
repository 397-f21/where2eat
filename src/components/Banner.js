import logo from "../assets/images/logo.jpg";
import './Banner.css'

const Banner = () => {
    return (
        <>
            <div className="banner" data-testid="banner">
                <ul>
                    <li>
                        <img
                            src={logo}
                            aria-label="logo"
                            alt="logo"
                            data-testid="logo"
                        />
                    </li>
                    <li className="topic" data-testid="topic">
                        <span>Find Your Meal!</span>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Banner