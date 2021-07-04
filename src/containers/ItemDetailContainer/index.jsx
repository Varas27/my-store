import { ItemDetail } from './../../components/ItemDetail/';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loader from "react-loader-spinner";

export const ItemDetailContainer = () => {
    const {id} = useParams();
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        async function getJSON() {
            const res = await fetch('/data/products.json');
            const json = await res.json();
            setTimeout(() => {
                setDetails(json[id - 1]);
                setLoading(false)
            }, 2000)
        }
        getJSON();
    },[id])

    return (
        <>

        {
        loading ? 

        <Loader
        className="text-center"
        type="TailSpin"
        color="#2294C6"
        height={50}
        width={50}
        timeout={2000}/>

        :
        
        details === undefined ?

        <div className="alert alert-warning mx-3 text-center" role="alert">
            Producto no encontrado. <Link to={'/'}>Volver al catálogo</Link>.
        </div>

        :

        <ItemDetail details={details}/>
        }
        </>
    )
}