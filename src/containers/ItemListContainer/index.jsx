import { useState, useEffect } from 'react';
import { ItemList } from './../../components/ItemList/';
import { useParams } from 'react-router-dom';
import Loader from "react-loader-spinner";
import { getFirestore } from '../../firebase/client';



export const ItemListContainer = () => {
    const {cat} = useParams();

    const [listProducts, setListProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const DB = getFirestore();
        const COLLECTION = DB.collection('productos');
        COLLECTION.get().then((querySnapshot) => {
            let snapshot = querySnapshot.docs.map(doc => {
                return { ...doc.data(), idDB: doc.id }
            });
            setListProducts(snapshot);
            setLoading(false)
        })
    }, []);

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
