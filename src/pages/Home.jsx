import { Link } from 'react-router-dom';
import { FaCoffee, FaBreadSlice, FaUsers } from 'react-icons/fa';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <section className="hero">
                <div className="hero-content glass-panel">
                    <h1 className="text-gradient">Experience the Perfect Brew</h1>
                    <p>
                        Artisan roasted coffee, fresh hand-made pastries, and an atmosphere
                        designed for inspiration. Welcome to The Daily Grind.
                    </p>
                    <div className="cta-buttons">
                        <Link to="/menu" className="btn-primary">View Menu</Link>
                        <Link to="/contact" className="btn-outline">Visit Us</Link>
                    </div>
                </div>
            </section>

            <section className="highlights container">
                <h2 className="section-title">Why Choose Us</h2>
                <div className="highlights-grid">
                    <div className="highlight-card glass-panel">
                        <FaCoffee className="highlight-icon" />
                        <h3>Premium Coffee</h3>
                        <p>Sourced from sustainable farms and roasted in small batches for the richest flavor.</p>
                    </div>
                    <div className="highlight-card glass-panel">
                        <FaBreadSlice className="highlight-icon" />
                        <h3>Fresh Pastries</h3>
                        <p>Baked fresh every morning using locally sourced ingredients.</p>
                    </div>
                    <div className="highlight-card glass-panel">
                        <FaUsers className="highlight-icon" />
                        <h3>Community First</h3>
                        <p>A space designed for connection, creativity, and comfort.</p>
                    </div>
                </div>
            </section>

            <section className="testimonials container">
                <h2 className="section-title">What Locals Say</h2>
                <div className="testimonials-grid">
                    <div className="testimonial-card glass-panel">
                        <div className="stars">★★★★★</div>
                        <p>"The Daily Grind has completely transformed my morning routine. The Nitro Cold Brew is simply unmatched in the city."</p>
                        <h4>— Sarah Jenkins</h4>
                    </div>
                    <div className="testimonial-card glass-panel">
                        <div className="stars">★★★★★</div>
                        <p>"Finally, a place that takes pastries as seriously as their coffee. The croissants are flaky, buttery perfection."</p>
                        <h4>— Michael Chen</h4>
                    </div>
                    <div className="testimonial-card glass-panel">
                        <div className="stars">★★★★★</div>
                        <p>"Love the vibe here. It's the perfect spot to get some work done or just unwind. Truly a community gem."</p>
                        <h4>— Emily Rodriguez</h4>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;