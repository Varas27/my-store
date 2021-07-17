import { useContext } from 'react';
import { ItemList } from './../../components/ItemList/';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Loader from "react-loader-spinner";


export const ItemListContainer = () => {
    const {listProducts, loading} = useContext(CartContext);
    const {cat} = useParams();

    return (
        <>
        <section>
            {
            loading ?

            <Loader
            className="text-center"
            type="TailSpin"
            color="#2294C6"
            height={50}
            width={50}/>
            
            :
            
            !cat ? 

            <>
            <h2 className="text-center mx-3 mb-3">Catálogo de productos</h2>
            <ItemList products={listProducts} />
            </>

            :

            <>
            <h2 className="text-center mx-3 mb-3">Catálogo de productos por categoría: {cat.charAt(0).toUpperCase() + cat.slice(1)}</h2>
            <ItemList products={listProducts.filter(product => product.cat === cat)} />
            </>
            }
        </section>
        </>
    )
}