import projectOne from '../assets/e-commerce.png';
import projectTwo from '../assets/wagstoriches.png';
import projectThree from '../assets/bookyears.png';
import projectFour from '../assets/notetaker.png';
import { Link } from 'react-router-dom';

function Project() {
    const styles = {
        linkStyle: {
            color: 'black'
        }, 
        cardStyles: {
            background: 'darkseagreen'
        }
    };
    return (


        <div className="row row-cols-1 row-cols-md-2 g-4">
    <div className="col">
        <div className="card" style={styles.cardStyles}>
            <img src={projectOne} className="card-img-top" alt="project1-image" />
            <div className="card-body">
                <Link  to="https://github.com/jbatcheller32/e-commerce" className="link-text" style={styles.linkStyle}>
                <h5 className="card-title">e-Commerce Project</h5></Link>
                <p className="card-text">This command-line application serves as a comprehensive employee management tool, facilitating database tracking for various tasks. Leveraging Node.js along with Inquirer and MySQL, it offers an array of features including department viewing, role addition, employee listing, and addition of new employees. Designed for efficiency and ease of use, it streamlines the management process for businesses and organizations.</p>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="card" style={styles.cardStyles}>
            <img src={projectTwo} className="card-img-top" alt="project2-image" />
            <div className="card-body">
            <Link  to="https://github.com/S10skeleton/Wags-to-Riches" className="link-text" style={styles.linkStyle}>
                <h5 className="card-title">Wags To Riches</h5></Link>
                <p className="card-text">Welcome to our Pet Adoption Website! Our platform is dedicated to facilitating connections between adorable pets and loving families, providing a seamless adoption experience. Utilizing Handlebars for templating, our website ensures visually appealing and dynamic content presentation. Additionally, we employ MySQL for robust data storage, enabling efficient management and retrieval of pet information. With our user-friendly interface and reliable backend infrastructure, we strive to unite pets with their forever homes, creating lasting bonds and joyful experiences for both pets and adoptive families.</p>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="card" style={styles.cardStyles}>
        <Link  to="https://read-radar.onrender.com/"  style={styles.linkStyle}>
            <img src={projectThree} className="card-img-top" alt="project3-image" /></Link>
            <div className="card-body">
            <Link  to="https://github.com/jbatcheller32/Read-Radar" className="link-text" style={styles.linkStyle}>
                <h5 className="card-title">MERN Stack App</h5></Link>
                <p className="card-text">Our desktop book app is designed to allow users to search the title of any book and get the book description, author, and a link to Google Books to preview the book. This app uses the Google Books API for the description, author, and Google Book link. Then uses the Open Library API for the titles. For styling, we used a CSS framework called CSS Reset to create a polished UI.</p>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="card" style={styles.cardStyles}>
            <Link to="https://sleepy-anchorage-38404-24d1132a98fc.herokuapp.com/" style={styles.linkStyle}>
            <img src={projectFour} className="card-img-top" alt="project4-image" /></Link>
            <div className="card-body">
            <Link  to="https://github.com/jbatcheller32/Note-Taker" className="link-text" style={styles.linkStyle}>
                <h5 className="card-title">Note Taker App</h5></Link>
                <p className="card-text">The Note Taker application provides users with the ability to create, store, and retrieve notes effortlessly. Leveraging the power of Express.js on the backend, the application ensures seamless handling of note data by storing and retrieving it from a JSON file. Users can easily compose new notes, save them for future reference, and access them whenever needed, offering a convenient and organized approach to note-taking.</p>
            </div>
        </div>
    </div>
</div>





    )
}

export default Project;