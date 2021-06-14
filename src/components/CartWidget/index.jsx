import { BiCart } from 'react-icons/bi';
import './styles.css'

export const CartWidgetComponent = () => {
    return (
        <>
        <button className='btn btn-default ml-auto order-lg-1 border-0 py-0' aria-label="shopping cart">
          <BiCart color='#fff' size='30'/>
        </button>
        </>
    )
}