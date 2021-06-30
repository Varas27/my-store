import { useState, useEffect } from 'react';
import { ItemCount } from './../../components/ItemCount/';
import { ItemList } from './../../components/ItemList/';
import { onAdd } from './../../utils/const';

export const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([]);

    useEffect( () => {
        async function getJSON() {
            const res = await fetch('./data/products.json');
            const json = await res.json();
        setProducts(json);   
        }
        getJSON();
    },[])

    return (
        <>
        <section>
            <p>{greeting}</p>
            <ItemCount initial={1} stock={7} onAdd={onAdd}/>
            <ItemCount initial={1} stock={0} onAdd={onAdd}/>  {/* test stock 0*/}
            <ItemList products={products} />
        </section>
        </>
    )
}