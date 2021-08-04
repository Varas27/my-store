import './styles.css';
import { ItemCount } from './../ItemCount/';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { CartContext } from './../../context/CartContext/';
import { RiArrowRightSLine } from 'react-icons/ri';

export const ItemDetail = ({ details }) => {
    const { addItem } = useContext(CartContext);

    const [purchase, setPurchase] = useState(false);
    const onAdd = (item, quantity) => {
        addItem(item, quantity);
        setPurchase(true);
    };

    return (
        <>
            <section>
                <div className="container col-12 col-lg-10 col-xl-9">
                    <div className="breadcrumbs">
                        <Link to='/'>inicio</Link><RiArrowRightSLine className="align-self-center" color='#B1AAA0'/><Link to={`/categories/${details.cat}`}>{details.cat}</Link><RiArrowRightSLine className="align-self-center" />{`${details.team} ${details.title}`}
                    </div>
                    <div className="row bg-white" style={{ borderRadius: "10px" }}>
                        <div className="col-md-6 pl-md-0 pr-md-3 py-4 text-center">
                            <img className="img-fluid" src={details.pictureUrl} alt={`${details.team} ${details.title}`} />
                        </div>
                        <div className="col-md-6 pl-md-0 pr-md-3 py-4">
                            <h3 className="detail-title m-0">{`${details.team} ${details.title}`}</h3>
                            <p className="detail-price my-3">${details.price}</p>
                            <hr className="my-4" style={{ borderColor: "#EFEFEF" }} />
                            <div>
                                <h4 style={{ fontSize: "1em", fontWeight: "500" }}>DESCRIPCIÓN</h4>
                                <p className="m-0">{details.description}</p>
                            </div>
                            <hr className="my-4" style={{ borderColor: "#EFEFEF" }} />
                            <h4 style={{ fontSize: "1em", fontWeight: "500" }}>CANTIDAD</h4>
                            <p style={{ fontWeight: "300" }}>Stock: {details.stock}</p>
                            <div style={{ padding: "1.3em", background: "#FBFBFB", borderRadius: "10px" }}>
                                {
                                    !purchase ?
                                        <>
                                            <ItemCount initial={1} item={details} stock={details.stock} onAdd={onAdd} />
                                        </>

                                        :

                                        <>
                                            <Link to='/cart'><button className="col-12 btn btn-primary" id="addToCart">Terminar mi compra</button></Link>
                                        </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}