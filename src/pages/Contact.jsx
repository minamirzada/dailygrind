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
                    <div className="map-container glass-panel" style={{ marginTop: '2rem', height: '250px', overflow: 'hidden', borderRadius: 'var(--radius-md)' }}>
                        <iframe
                            title="Location Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.315060957598!2d-87.62979828455865!3d41.88607177922149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca8b34af8bd%3A0x42b59046f3302388!2sChicago%2C%20IL%2060601!5e0!3m2!1sen!2sus!4v1645564756852!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
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

            <div className="faq-section" style={{ marginTop: '5rem', paddingBottom: '3rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Common Questions</h2>
                    <p style={{ color: 'var(--color-text-secondary)' }}>Everything you need to know before you visit.</p>
                </div>

                <div className="faq-grid glass-panel" style={{ padding: '2.5rem', display: 'grid', gap: '2.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                    <div className="faq-item">
                        <h3 style={{ color: 'var(--color-accent)', marginBottom: '0.8rem', fontSize: '1.3rem' }}>Do you offer Wi-Fi?</h3>
                        <p style={{ lineHeight: '1.6' }}>Yes! We have high-speed, free Wi-Fi for all customers. It's the perfect spot to work, study, or just surf the web.</p>
                    </div>
                    <div className="faq-item">
                        <h3 style={{ color: 'var(--color-accent)', marginBottom: '0.8rem', fontSize: '1.3rem' }}>Are pets allowed?</h3>
                        <p style={{ lineHeight: '1.6' }}>We are dog-friendly! Well-behaved dogs are welcome in our outdoor patio seating area. Ask for a pup cup!</p>
                    </div>
                    <div className="faq-item">
                        <h3 style={{ color: 'var(--color-accent)', marginBottom: '0.8rem', fontSize: '1.3rem' }}>Do you have vegan options?</h3>
                        <p style={{ lineHeight: '1.6' }}>Absolutely. We offer oat, almond, and soy milk alternatives, plus vegan pastries like our signature Banana Bread.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;