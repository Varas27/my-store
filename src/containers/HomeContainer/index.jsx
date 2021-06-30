import { NavBar } from '../../components/NavBar';
import { ItemDetailContainer } from '../ItemDetailContainer';
import { ItemListContainer } from './../ItemListContainer/';

export const HomeContainer = () => {
    return (
        <>
        <NavBar />
        {/* <ItemListContainer greeting={'Bienvenidos a la lista de productos'}/> */}
        <ItemDetailContainer />
        </>
    )
}