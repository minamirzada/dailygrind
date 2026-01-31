import { useState } from 'react';
import menuLatte from '../assets/menu-latte.png';
import menuAvocadoToast from '../assets/menu-avocado-toast.png';
import menuCroissant from '../assets/menu-croissant.png';
import menuMatcha from '../assets/menu-matcha.png';
import menuCappuccino from '../assets/menu-cappuccino.png';
import menuAmericano from '../assets/menu-americano.png';
import menuMacchiato from '../assets/menu-macchiato.png';
import menuMuffin from '../assets/menu-muffin.png';
import menuNitro from '../assets/menu-nitro.png';
import menuHoneyLavender from '../assets/menu-honey-lavender.png';
import menuVeganBananaBread from '../assets/menu-vegan-banana-bread.png';
import menuChaiLatte from '../assets/menu-chai-latte.png';
import './Menu.css';

const MENU_ITEMS = [
    { id: 10, category: 'Specials', name: 'Honey Lavender Latte', price: '$5.75', desc: 'Espresso infused with local honey and organic lavender.', image: menuHoneyLavender },
    { id: 1, category: 'Espresso', name: 'Latte', price: '$4.50', desc: 'Espresso with steamed milk and a thin layer of foam.', image: menuLatte },
    { id: 2, category: 'Espresso', name: 'Cappuccino', price: '$4.00', desc: 'Espresso with equal parts steamed milk and foam.', image: menuCappuccino },
    { id: 3, category: 'Espresso', name: 'Americano', price: '$3.50', desc: 'Espresso diluted with hot water.', image: menuAmericano },
    { id: 4, category: 'Espresso', name: 'Macchiato', price: '$3.75', desc: 'Espresso marked with a dollop of foam.', image: menuMacchiato },
    { id: 5, category: 'Appetizer', name: 'Avocado Toast', price: '$8.00', desc: 'Sourdough, smashed avocado, chili flakes.', image: menuAvocadoToast },
    { id: 11, category: 'Pastries', name: 'Vegan Banana Bread', price: '$4.00', desc: 'Moist, walnut-topped banana bread. 100% Plant-based.', image: menuVeganBananaBread },
    { id: 6, category: 'Pastries', name: 'Croissant', price: '$3.00', desc: 'Buttery, flaky, and fresh baked.', image: menuCroissant },
    { id: 7, category: 'Pastries', name: 'Blueberry Muffin', price: '$3.50', desc: 'Bursting with fresh blueberries.', image: menuMuffin },
    { id: 8, category: 'Cold Brew', name: 'Nitro Cold Brew', price: '$5.00', desc: 'Cold brew infused with nitrogen for a creamy texture.', image: menuNitro },
    { id: 9, category: 'Specials', name: 'Matcha Latte', price: '$5.50', desc: 'Premium matcha green tea with steamed milk.', image: menuMatcha },
    { id: 12, category: 'Specials', name: 'Spiced Chai Latte', price: '$4.75', desc: 'Black tea concentrate brewed with aromatic spices and milk.', image: menuChaiLatte },
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
                <button
                    className="btn-primary"
                    onClick={() => alert("Online ordering system coming soon!")}
                    style={{ marginTop: '1.5rem' }}
                >
                    Order Online
                </button>
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
                        {item.image && (
                            <div className="menu-item-image">
                                <img src={item.image} alt={item.name} />
                            </div>
                        )}
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