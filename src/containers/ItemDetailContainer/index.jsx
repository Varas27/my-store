import { ItemDetail } from './../../components/ItemDetail/';
import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


export const ItemDetailContainer = () => {
    const {listProducts} = useContext(CartContext);
    const {id} = useParams();
    const singleProduct = listProducts[id - 1]
    
    return (
        <>

        {
        singleProduct === undefined ?

        <div className="alert alert-warning mx-3 text-center" role="alert">
            Producto no encontrado. <Link to={'/'}>Volver al catálogo</Link>.
        </div>

        :

        <ItemDetail details={singleProduct}/>
        }
        </>
    )
}