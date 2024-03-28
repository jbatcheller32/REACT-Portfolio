import projectOne from '../assets/e-commerce.png';
import projectTwo from '../assets/wagstoriches.png';
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
                <p className="card-text">Welcome to our Pet Adoption Website! This pet is designed to help connect adorable pets with loving families. The website is built using Handlebars for templating and MySQL for data storage.</p>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="card" style={styles.cardStyles}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="card" style={styles.cardStyles}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
    </div>
</div>





    )
}

export default Project;