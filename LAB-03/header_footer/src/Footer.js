import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__top">
                    <div className="footer__links-section">
                        <div className="footer__column">
                            <h4 className="footer__title">Company</h4>
                            <ul>
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#careers">Careers</a></li>
                            </ul>
                        </div>
                        <div className="footer__column">
                            <h4 className="footer__title">View Website in</h4>
                            <ul>
                                <li><a href="#english">✓ English</a></li>
                            </ul>
                        </div>
                        <div className="footer__column">
                            <h4 className="footer__title">Need Help?</h4>
                            <ul>
                                <li><a href="#help">Help Center</a></li>
                                <li><a href="#feedback">Feedback</a></li>
                                <li><a href="#grievance">Content Grievance Redressal</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__connect">
                        <h4 className="footer__title">Connect with us</h4>
                        <div className="footer__socials">
                            <span className="social-icon">f</span>
                            <span className="social-icon">tw</span>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="footer__legal">
                        <p>© Disney+ Hotstar. All Rights Reserved.</p>
                        <div className="footer__legal-links">
                            <a href="#terms">Terms of Use</a>
                            <a href="#privacy">Privacy Policy</a>
                            <a href="#faq">FAQ</a>
                            <a href="#devices">Device List</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
