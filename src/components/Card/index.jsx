import './styles.css';
import { Link } from 'react-router-dom';

export const Card = ({title, price, team, image, idDB}) => {
    return (
        <>
        <div className="card col-5 col-md-3 col-lg-2 p-0 product-card ">
            <img className="card-img-top p-2" src={image} alt={`${team} ${title}`} />
            <div className="card-body">
                <h3 className="card-title">{team} {title}</h3>
                <p className="card-text price">${price}</p>
                
            </div>
            <Link to={`/product/${idDB}`}>
                <button type="button" className="btn py-2" id="verMas">
                    Ver más
                </button>
            </Link>
        </div>
        </>
    )
}