import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-black text-white ">
                <nav>
                    <header className="footer-title">Social Service</header>
                    <a href="https://www.facebook.com/hassan4np"  className="link link-hover">Facebook</a>
                    <a href="https://www.linkedin.com/in/hassan4np" className="link link-hover">Linkedin</a>

                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <Link to='/about'><a className="link link-hover">About us</a></Link>
                    <Link to='/contact'><a className="link link-hover">Contact</a></Link>


                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>

                </nav>
            </footer>

        </div>
    );
};

export default Footer;