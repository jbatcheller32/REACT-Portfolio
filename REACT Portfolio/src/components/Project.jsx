import mysqlImage from '../assets/mysql.jpg';

function Project() {
    return (


        <div className="row row-cols-1 row-cols-md-2 g-4">
    <div className="col">
        <div className="card">
            <img src={mysqlImage} className="card-img-top-1" alt="sql-image" />
            <div className="card-body">
                <h5 className="card-title">e-Commerce Project</h5>
                <p className="card-text">This command-line application serves as a comprehensive employee management tool, facilitating database tracking for various tasks. Leveraging Node.js along with Inquirer and MySQL, it offers an array of features including department viewing, role addition, employee listing, and addition of new employees. Designed for efficiency and ease of use, it streamlines the management process for businesses and organizations.</p>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="card">
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