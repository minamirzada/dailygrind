import './About.css';

const About = () => {
    return (
        <div className="about container">
            <div className="about-header">
                <h1 className="text-gradient">Our Story</h1>
                <p>From humble beans to your morning routine.</p>
            </div>

            <div className="about-content">
                <div className="about-image glass-panel">
                    {/* In a real app, an image would go here */}
                </div>
                <div className="about-text">
                    <h2>Crafting Community</h2>
                    <p>
                        Started in 2010, The Daily Grind began with a simple mission: to serve coffee
                        that makes you pause and appreciate the moment. We believe that a coffee shop
                        is more than just a place to get caffeine—it's a sanctuary, a meeting place,
                        and a second home.
                    </p>
                    <p>
                        We source our beans directly from sustainable farms across the globe, ensuring
                        fair wages for farmers and the highest quality for our customers. Every cup
                        you drink supports a global community of coffee lovers.
                    </p>

                    <div className="about-stats">
                        <div>
                            <span className="stat-number">15+</span>
                            <span className="stat-label">Years Brewing</span>
                        </div>
                        <div>
                            <span className="stat-number">100%</span>
                            <span className="stat-label">Fair Trade</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;