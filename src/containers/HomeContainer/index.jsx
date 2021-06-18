import { NavBarComponent } from '../../components/NavBar';
import { ItemListContainer } from './../ItemListContainer/';
import { CardComponent } from './../../components/CardComponent/';

export const HomeContainer = () => {
    return (
        <>
        <NavBarComponent />
        <ItemListContainer greeting={'Bienvenidos a la lista de productos'}/>
        <CardComponent title={"Hola"} price={"855"} description={"asdasd"} /> {/* test */}
        </>
    )
}