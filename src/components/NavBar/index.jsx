import './styles.css';
import { FiMenu } from 'react-icons/fi';
import { CartWidgetComponent } from './../CartWidget/index';

export const NavBarComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="/#">NeBeA</a>

            <CartWidgetComponent />

            <button className="navbar-toggler border-0 py-0 order-lg-1" type="button" data-toggle="collapse" data-target="#bar" aria-controls="bar" aria-expanded="false" aria-label="burger menu">
            <span className="navbar-toggler-icon">
              <FiMenu color='#fff' size='30'/>
            </span>
            </button>

            <div className="collapse navbar-collapse" id="bar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Jerseys</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Shorts</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Gorras</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};