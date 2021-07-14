import { useState, useEffect } from 'react';
import { ItemList } from './../../components/ItemList/';
import { useParams } from 'react-router-dom';

export const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([]);
    const {cat} = useParams()

    useEffect( () => {
        async function getJSON() {
            const res = await fetch('/data/products.json');
            const json = await res.json();
        setProducts(json);   
        }
        getJSON();
    },[])

    return (
        <>
        <section>

            {
            !cat ? 

            <>
            <h2 className="text-center mx-3 mb-3">Catálogo de productos</h2>
            <ItemList products={products} />
            </>

            :

            <>
            <h2 className="text-center mx-3 mb-3">Catálogo de productos por categoría: {cat.charAt(0).toUpperCase() + cat.slice(1)}</h2>
            <ItemList products={products.filter(product => product.cat === cat)} />
            </>
            }
        </section>
        </>
    )
}