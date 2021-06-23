import { useState, useEffect } from 'react';
import { ItemCountComponent } from './../../components/ItemCount/';
import { ItemListComponent } from './../../components/ItemList/';

export const ItemListContainer = ({greeting}) => {
    const onAdd = (counter) => {
        let m;
        if (counter === 1) {
            m = `Se agregó ${counter} producto.`
        } else {
            m = `Se agregaron ${counter} productos.`
        };

        alert(m);
    };

    const [products, setProducts] = useState([]);

    useEffect( async () => {
        const res = await fetch('./data/products.json');
        const json = await res.json();
        setProducts(json);       
    },[])

    return (
        <>
        <section>
            <p>{greeting}</p>
            <ItemCountComponent initial={1} stock={7} onAdd={onAdd}/>
            <ItemCountComponent initial={1} stock={0} onAdd={onAdd}/>  {/* test stock 0*/}
            <ItemListComponent products={products} />
        </section>
        </>
    )
}