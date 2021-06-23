import './styles.css';

export const CardComponent = ({title, price, team, image}) => {
    return (
        <>
        <div className="card col-5 col-md-3 col-lg-2 p-0 product-card">
            <img className="card-img-top p-2" src={image} alt={`${team} ${title}`} />
            <div className="card-body">
                <h3 className="card-title">{team} {title}</h3>
                <p className="card-text price">${price}</p>
            </div>
        </div>
        </>
    )
}