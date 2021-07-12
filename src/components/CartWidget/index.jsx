import { BiCart } from 'react-icons/bi';
import './styles.css';

export const CartWidget = ({quantity}) => {
    return (
        <>
        <button className='btn shadow-none order-lg-1 ml-auto border-0 py-0' style={{color: '#fff'}} aria-label="shopping cart" type="button" data-target="#cart" aria-controls="cart">
          <BiCart size='30'/> {quantity}
        </button>
        </>
    )
}