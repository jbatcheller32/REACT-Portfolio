import { useState } from "react";
import NavTabs from './NavTabs';
import About from '.././pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';


// this method is checking the current page and rendering what ever page it is on
export default function Header() {

    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {

        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page); 



    return (
        <div>

            {
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            }
            <main className="mx-3">{renderPage()}</main>


        </div>
    )



}

