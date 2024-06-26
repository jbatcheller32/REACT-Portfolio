import '../styles/resume.css';
import { Link } from 'react-router-dom';
export default function Resume() {
    const styles = {
        linkStyle: {
            color: 'black',
            textDecoration: 'underline'
        },
    };

    return (
        <>
            <div className="contact-info">
                <p>
                    <h5>James Batcheller</h5>
                    <h5>Fort Collins, CO</h5>
                    <h5>(303)-483-8887</h5>
                    <Link to="mailto:Jbatcheller123@gmail.com" style={styles.linkStyle}>
                        <h5>Email Me</h5>
                    </Link>

                    <Link to="linkedin.com/in/jamesbatcheller" style={styles.linkStyle}><h5>LinkedIn Profile</h5></Link><br />
                </p>
            </div>

            <div className="summary">
                <h3>Summary</h3>
                <p>
                Results-driven Technical Support Specialist with over a decade of experience in customer-centric roles spanning diverse industries. Possessing an AAS in Computer Information Systems, I have recently augmented my skills and knowledge through a rigorous full stack coding bootcamp at Denver University. This educational experience has provided me with advanced expertise in modern programming languages and web development frameworks, complementing my extensive background in technical support.
                </p>
            </div><br /><br />

            <div className="experience">
                <h3>Professional Experience</h3><br /><br />

                <div className="job-experience">
                    <h3>Technical Support Specialist - IDX Broker LLC</h3><br />
                    <ul className="skills">
                        <li>Leverage diverse technical support channels to assist clients effectively, drawing from over 2 years of SaaS industry experience</li>
                        <li>Utilize advanced ticketing and collaboration tools including; Salesforce, Jira, and Confluence, to manage and resolve user inquiries with precision and efficiency</li>
                        <li>Apply an engineering background to troubleshoot complex technical issues, prioritizing client-centric solutions.</li>
                    </ul>
                </div>

                <div className="job-experience">
                    <h3>Apple Certified Technician - Simply Mac</h3><br />
                    <ul className="skills">
                        <li>Conduct thorough troubleshooting and diagnosis of intricate iOS and macOS hardware and software issues.</li>
                        <li>Offer insightful guidance to customers navigating challenges with iOS and macOS devices.</li>
                        <li>Execute precise repairs on all internal and external components of Apple laptops, desktops, and phones.</li>
                    </ul>
                </div>

                <div className="job-experience">
                    <h3>Pro Shop Assistant/ Marshal Staff Manager - RiverRidge Golf and Events</h3><br />
                    <ul className="skills">
                        <li>Orchestrated diverse golf course events including weddings, birthday parties, and corporate gatherings.</li>
                        <li>Provided comprehensive training to marshal staff, ensuring adherence to golf course safety protocols and regulations.</li>
                        <li>Managed tee time reservation system while delivering exceptional guest service.</li>
                    </ul>
                </div>

                <div className="job-experience">
                    <h3>Table Games Dealer - Lady Luck Casino Hotel</h3><br />
                    <ul className="skills">
                        <li>Cultivated an engaging and enjoyable atmosphere for guests, enhancing their overall gaming experience.</li>
                        <li>Proficiently dealt table games and accurately determined winning and losing hands.</li>
                        <li>Vigilantly monitored gameplay to detect and report any signs of cheating or misconduct.</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

