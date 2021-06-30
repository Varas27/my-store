import { BiCart } from 'react-icons/bi';
import './styles.css';

export const CartWidget = () => {
    return (
        <>
        <button className='btn shadow-none order-lg-1 ml-auto border-0 py-0' aria-label="shopping cart" type="button" data-target="#cart" aria-controls="cart">
          <BiCart color='#fff' size='30'/>
        </button>
        </>
    )
}