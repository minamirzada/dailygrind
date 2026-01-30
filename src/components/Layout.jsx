import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    const { pathname } = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="app-layout">
            <Navbar />
            <main style={{ minHeight: '100vh', paddingTop: 'var(--header-height)' }}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
