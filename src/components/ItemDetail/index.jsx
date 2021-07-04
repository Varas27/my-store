import './styles.css';
import { ItemCount } from './../ItemCount/';
import { onAdd } from './../../utils/const';

export const ItemDetail = ({details}) => {
    return(
        <>
            <section>
                <div className="container col-12 col-lg-10 col-xl-9">
                    <div className="row bg-white" style={{borderRadius: "10px"}}>
                        <div className="col-md-6 pl-md-0 pr-md-3 py-4 text-center">
                            <img className="img-fluid" src={details.pictureUrl} alt= {`${details.team} ${details.title}`} />
                        </div>
                        <div className="col-md-6 pl-md-0 pr-md-3 py-4">
                            <h3 className="detail-title m-0">{`${details.team} ${details.title}`}</h3>
                            <p className="detail-price my-3">${details.price}</p>
                            <hr className="my-4" style={{borderColor:"#EFEFEF"}}/>
                            <div>
                                <h4 style={{fontSize: "1em", fontWeight:"500"}}>DESCRIPCIÓN</h4>
                                <p className="m-0">{details.description}</p>
                            </div>
                            <hr className="my-4" style={{borderColor:"#EFEFEF"}}/>
                            <h4 style={{fontSize: "1em", fontWeight:"500"}}>CANTIDAD</h4>
                            <p style={{fontWeight:"300"}}>Stock: {details.stock}</p>
                            <ItemCount initial={1} stock={details.stock} onAdd={onAdd}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}