import { Link, useLocation } from 'react-router-dom';
//import Header from './Header';
const styles = {
  navStyle: {
      backgroundColor: 'lightgrey',
      height: '75px'
  },
  
  navLinks: {
    backgroundColor: 'lightgrey', 
    color: 'white', 
    justifyContent: 'right'
  },

}; 


function NavTabs() {
  const currentPage = useLocation().pathname;

  return (

    

    <ul style={styles.navStyle}  className="nav nav-tabs">
      <li  className="nav-item">
        <Link style={styles.navLinks}
          to="/"
          
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link style={styles.navLinks}
          to="/Portfolio"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link style={styles.navLinks}
          to="/Resume"
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
      </li>
      <li className="nav-item">
        <Link style={styles.navLinks}
          to="/Contact"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
      
    </ul>
    
  );
}

export default NavTabs;
