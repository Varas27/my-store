import { ItemCountComponent } from './../../components/ItemCount/';

export const ItemListContainer = ({greeting}) => {
    const onAdd = (counter) => {
        let m;
        if (counter === 1) {
            m = `Se agregó ${counter} producto.`
        } else {
            m = `Se agregaron ${counter} productos.`
        };

        alert(m);
    }
    return (
        <>
            <p>{greeting}</p>
            <ItemCountComponent initial={1} stock={7} onAdd={onAdd}/>
            <ItemCountComponent initial={1} stock={0} onAdd={onAdd}/>  {/* test stock 0*/}
        </>
    )
}