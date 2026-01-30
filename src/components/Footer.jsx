import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>The Daily Grind</h3>
                        <p>
                            Crafting perfect moments, one cup at a time. Join us for the best coffee in Chicago.
                        </p>
                    </div>
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Connect</h3>
                        <div className="social-icons">
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon"><FaInstagram /></a>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon"><FaFacebook /></a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon"><FaTwitter /></a>
                        </div>
                        <p style={{ marginTop: '1rem' }}>
                            123 Coffee Lane, Chicago, IL 60601<br />
                            (312) 555-0123
                        </p>
                    </div>
                </div>
                <div className="footer-bottom">
                    &copy; {new Date().getFullYear()} The Daily Grind. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
