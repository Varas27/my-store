import './styles.css';
import { FiMenu } from 'react-icons/fi';
import { CartWidget } from './../CartWidget/index';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './../../context/CartContext/';

export const NavBar = () => {
    const {cart} = useContext(CartContext)
    return (
        <nav className="navbar navbar-expand-lg mb-5">
            <h1 className="mb-0 mr-3" style={{ fontSize: '2em' }}><Link to={'/'}>NeBeA</Link></h1>

            {
            cart.length ? 
            <CartWidget quantity={cart.length}/>
            :            
            null
            }

            <button className="navbar-toggler border-0 py-0 order-lg-1 collapsed" type="button" data-toggle="collapse" data-target="#bar" aria-controls="bar" aria-expanded="false" aria-label="burger menu">
                <span className="navbar-toggler-icon">
                    <FiMenu color='#fff' size='30' />
                </span>
            </button>

            <div className="collapse navbar-collapse" id="bar">
                <ul className="navbar-nav text-center">
                    <li className="nav-item">
                        <NavLink to={'/categories/jerseys'} activeClassName="active" className="nav-link">
                            Jerseys
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/categories/shorts'} activeClassName="active" className="nav-link">
                            Shorts
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/categories/gorras'} activeClassName="active" className="nav-link">
                            Gorras
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
};