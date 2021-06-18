import './styles.css';

export const CardComponent = ({title, price, description}) => {
    return (
        <>
        <div className="card col-5 col-md-4 col-lg-3">
            <img className="card-img-top" src="..." alt="" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">{price}</p>
            </div>
        </div>
        </>
    )
}