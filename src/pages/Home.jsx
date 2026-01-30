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
        </div>
    );
};

export default Home;