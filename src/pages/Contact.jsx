import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="contact-page container">
            <div className="contact-header">
                <h1 className="text-gradient">Get in Touch</h1>
                <p>We'd love to hear from you. Stop by or send us a message.</p>
            </div>

            <div className="contact-container">
                <div className="contact-info">
                    <h2>Visit Us</h2>
                    <div className="info-item">
                        <h3>Address</h3>
                        <p>123 Coffee Lane,<br />Chicago, IL 60601</p>
                    </div>
                    <div className="info-item">
                        <h3>Hours</h3>
                        <p>Mon - Fri: 7am - 8pm</p>
                        <p>Sat - Sun: 8am - 9pm</p>
                    </div>
                    <div className="info-item">
                        <h3>Contact</h3>
                        <p>Phone: (312) 555-0123</p>
                        <p>Email: hello@thedailygrind.com</p>
                    </div>
                </div>

                <div className="contact-form glass-panel" style={{ padding: '2rem' }}>
                    <h2>Send a Message</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-control"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="form-control"
                                placeholder="Inquiry / Feedback"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="form-control"
                                placeholder="How can we help?"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;