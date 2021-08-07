import { useEffect, useState } from 'react';
import { ItemDetail } from './../../components/ItemDetail/';
import { useParams, Link } from 'react-router-dom';
import Loader from "react-loader-spinner";
import { getFirestore } from '../../firebase/client';


export const ItemDetailContainer = () => {
    const { id } = useParams();

    const [singleProduct, setSingleProduct] = useState();
    const [loading, setLoading] = useState(true);


    const getItem = (id) => {
        const DB = getFirestore();
        DB.collection('productos').doc(id).get().then((snapshot) => {
            setSingleProduct({...snapshot.data(), idDB: id});
            setLoading(false);
        });
    };

    useEffect(() => {
        getItem(id);
    }, [id]);

    return (
        <>

            {
                loading ?

                    <Loader
                        className="text-center"
                        type="TailSpin"
                        color="#2294C6"
                        height={50}
                        width={50} />

                    :

                    singleProduct.title === undefined ?

                        <div className="alert alert-warning mx-3 text-center" role="alert">
                            Producto no encontrado. <Link to={'/'}>Volver al catálogo</Link>.
                        </div>

                        :

                        <ItemDetail details={singleProduct} />
            }
        </>
    )
}