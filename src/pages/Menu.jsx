import { useState } from 'react';
import './Menu.css';

const MENU_ITEMS = [
    { id: 1, category: 'Espresso', name: 'Latte', price: '$4.50', desc: 'Espresso with steamed milk and a thin layer of foam.' },
    { id: 2, category: 'Espresso', name: 'Cappuccino', price: '$4.00', desc: 'Espresso with equal parts steamed milk and foam.' },
    { id: 3, category: 'Espresso', name: 'Americano', price: '$3.50', desc: 'Espresso diluted with hot water.' },
    { id: 4, category: 'Espresso', name: 'Macchiato', price: '$3.75', desc: 'Espresso marked with a dollop of foam.' },
    { id: 5, category: 'Appetizer', name: 'Avocado Toast', price: '$8.00', desc: 'Sourdough, smashed avocado, chili flakes.' }, // Changed category to match logical grouping if needed, but sticking closer to initial plan
    { id: 6, category: 'Pastries', name: 'Croissant', price: '$3.00', desc: 'Buttery, flaky, and fresh baked.' },
    { id: 7, category: 'Pastries', name: 'Blueberry Muffin', price: '$3.50', desc: 'Bursting with fresh blueberries.' },
    { id: 8, category: 'Cold Brew', name: 'Nitro Cold Brew', price: '$5.00', desc: 'Cold brew infused with nitrogen for a creamy texture.' },
    { id: 9, category: 'Specials', name: 'Matcha Latte', price: '$5.50', desc: 'Premium matcha green tea with steamed milk.' },
];

const CATEGORIES = ['All', 'Espresso', 'Pastries', 'Cold Brew', 'Specials'];

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredItems = activeCategory === 'All'
        ? MENU_ITEMS
        : MENU_ITEMS.filter(item => item.category === activeCategory);

    return (
        <div className="menu-page container">
            <div className="menu-header">
                <h1 className="text-gradient">Our Menu</h1>
                <p>Carefully curated for every taste.</p>
            </div>

            <div className="menu-categories">
                {CATEGORIES.map(cat => (
                    <button
                        key={cat}
                        className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="menu-grid">
                {filteredItems.map(item => (
                    <div key={item.id} className="menu-item glass-panel">
                        <div className="menu-item-header">
                            <span className="item-name">{item.name}</span>
                            <span className="item-price">{item.price}</span>
                        </div>
                        <p className="item-desc">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;