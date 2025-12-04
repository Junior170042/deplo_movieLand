import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTopButton from './scrollToTop';

const Layout = () => {
    return (
        <>
            <Navbar />
            <ScrollToTopButton />
            <Outlet />
            <Footer />

        </>
    );
};

export default Layout;
