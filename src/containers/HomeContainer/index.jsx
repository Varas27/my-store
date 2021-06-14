import { NavBarComponent } from '../../components/NavBar';
import { ItemListContainer } from './../ItemListContainer/index';

export const HomeContainer = () => {
    return (
        <>
        <NavBarComponent />
        <ItemListContainer greeting={'Bienvenidos a la lista de productos'}/>
        </>
    )
}