import { ItemCountComponent } from './../../components/ItemCount/';

export const ItemListContainer = ({greeting}) => {
    return (
        <>
            <p>{greeting}</p>
            <ItemCountComponent initial={1} stock={7} />
        </>
    )
}