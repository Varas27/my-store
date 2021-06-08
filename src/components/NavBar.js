import './styles.css';

export const NavBarComponent = () => {
    return (
        <nav style={{backgroundColor:"red"}} className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#">NeBeA</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Jerseys</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Shorts</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Gorras</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};