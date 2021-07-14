import { BiCart } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import './styles.css';

export const CartWidget = ({ quantity }) => {
  return (
    <>
      <div className="order-lg-1 ml-auto" style={{position: 'relative'}}>
        <Link to={'/cart'} style={{ color: '#fff', textDecoration: 'none' }}>
          <BiCart size='30' />
        <div className="counter d-flex align-items-center justify-content-center">
          <span>{quantity}</span>
        </div>
        </Link>
      </div>
    </>
  )
}