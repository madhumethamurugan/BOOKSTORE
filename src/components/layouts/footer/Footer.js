import React from "react";
import './Footer.styles.css';

const Footer = () => {
    return (
        <section className="footer-container">
            <div className="container">
                <h2>If you have any queries feel free to ask here.</h2>

                <form className="footer-form">
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type="text" id="name" className="form-input" placeholder="Enter you Name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" id="email" className="form-input" placeholder="Enter you Email"/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="query" className="form-label">Query:</label>
                        <textarea className="form-input" id="query" placeholder="Type your Query"></textarea>
                    </div>
                    <div className="form-group">
                        <a href="#" className="form-submit">Submit</a>
                    </div>
                </form>
                <p>&copy; 2024 Bookworm. All Rights Reserved.</p>
            </div>
        </section>
    )
}

export default Footer;