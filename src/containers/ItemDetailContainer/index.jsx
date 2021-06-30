import { ItemDetail } from './../../components/ItemDetail/';
import { useState, useEffect } from 'react';

export const ItemDetailContainer = () => {
    const [details, setDetails] = useState([]);

    useEffect( () => {
        async function getJSON() {
            const res = await fetch('./data/products.json');
            const json = await res.json();
            setTimeout(() => {
                setDetails(json[0]);
            }, 2000)
        
        }
        getJSON();
    },[])

    return (
        <>
            <ItemDetail details={details}/>
        </>
    )
}