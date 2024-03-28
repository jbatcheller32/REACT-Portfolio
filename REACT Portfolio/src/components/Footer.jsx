import '../styles/footer.css';
import githubLogo from '../assets/github-mark.png';

const Footer = () => {
    const githubLink = [
      {
        username: 'jbatcheller32',
        url: 'https://github.com/jbatcheller32'
      }
    ];
  
    return (
      <div>
        <footer className="footer">
          <div className="container">
            <div className="row">
              {githubLink.map((link, index) => (
                <div key={index} className="col-md-4">
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <img src={githubLogo} alt={link.username} className='footer-image' />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </footer>
      </div>
    );
  };
  
  export default Footer;

 