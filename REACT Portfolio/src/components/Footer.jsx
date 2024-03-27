import '../styles/footer.css';

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
                    <img src={`https://github.com/${link.username}.png`} alt={link.username} />
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