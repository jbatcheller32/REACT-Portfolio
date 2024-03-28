import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
    const styles = {
        navStyle: {
            paddingTop: '75px',
            height: '75px',
            borderStyle: 'none'
        },
        navLinks: {
            backgroundColor: 'transparent',
            color: 'white',
            fontSize: '25px',
            fontWeight: 'bold',
            justifyContent: 'center'
        }
    };

    const currentPage = useLocation().pathname;

    return (
        <header>
            <h1>James Batcheller</h1>
            <ul style={styles.navStyle} className="nav nav-tabs">
                <li className="nav-item">
                    <Link
                        style={styles.navLinks}
                        to="/"
                        className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                    >
                        About Me
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        style={styles.navLinks}
                        to="/Portfolio"
                        className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                        Portfolio
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        style={styles.navLinks}
                        to="/Resume"
                        className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                    >
                        Resume
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        style={styles.navLinks}
                        to="/Contact"
                        className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;