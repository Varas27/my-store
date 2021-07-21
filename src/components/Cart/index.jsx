import './styles.css';
import { useContext } from 'react';
import { CartContext } from './../../context/CartContext/';
import { Link } from 'react-router-dom';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { CgSmileSad } from 'react-icons/cg';
import { RiArrowRightSLine } from 'react-icons/ri';
import { RiArrowLeftSLine } from 'react-icons/ri';

export const Cart = () => {
    const { cart, clear, removeItem, totalPrice } = useContext(CartContext);

    return (
        <section>
            <h2 className="text-center mx-3 mb-3">Carrito</h2>
            <div className="container">
                <div className="row">
                    {
                        !cart.length ?
                            <>
                                <div className="mx-auto">
                                    <HiOutlineShoppingBag color='#B0B0B0' style={{ position: 'relative' }} size='300' />
                                    <CgSmileSad className="onTop" color='#B0B0B0' style={{ position: 'absolute', top: '18.7em', right: 'calc(50% - 43px)' }} size='100' />
                                    <p className="text-center mb-4" style={{ color: '#B0B0B0', fontSize: '2em', fontWeight: '600' }}>Tu carrito está vacío</p>
                                    <Link to='/'>
                                        <button className="col-12 btn btn-primary mb-3" id="addToCart">Ir al catálogo</button>
                                    </Link>
                                </div>
                            </>
                            :
                            <>
                                <div className="col-md-9 row mx-auto mb-4">
                                    <table className="table">
                                        <thead className="table-borderless">
                                            <tr>
                                                <th scope="col" className="text-left">Producto</th>
                                                <th scope="col">Precio</th>
                                                <th scope="col">Cantidad</th>
                                                <th scope="col">Subtotal</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart.map(product => {
                                                return (
                                                    <tr className="py-3" key={product.item.idDB}>
                                                        <td data-th="Producto">
                                                            <div className="row cart-product-details align-items-center">
                                                                <button className="btn ml-2 p-1" onClick={() => { removeItem(product.item.idDB) }} style={{ color: '#B0B0B0' }} title='Eliminar'>x</button>
                                                                <Link to={`/product/${product.item.idDB}`} className="d-none d-sm-block col-3 col-sm-3 col-lg-2">
                                                                    <img src={product.item.pictureUrl} alt={`${product.item.team} ${product.item.title}`} className="img-fluid" />
                                                                </Link>
                                                                <Link to={`/product/${product.item.idDB}`} className="col ml-2 p-0 text-left">
                                                                    <h3 className="mb-0">
                                                                        {`${product.item.team} ${product.item.title}`}
                                                                    </h3>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                        <td data-th="Precio"><p className="m-0">{product.item.price}</p></td>
                                                        <td data-th="Cantidad"><p className="m-0">{product.quantity}</p></td>
                                                        <td data-th="Subtotal"><p className="m-0">{product.item.price * product.quantity}</p></td>
                                                    </tr>
                                                )
                                            })
                                            }
                                        </tbody>
                                    </table>
                                    <div className="mx-auto row justify-content-between" style={{ width: '100%' }}>
                                        <div>
                                            <button className="d-flex btn empty-cart mb-3 mb-sm-0 p-0" onClick={clear}>
                                                <RiArrowLeftSLine className="align-self-center" /> VACIAR CARRITO
                                            </button>
                                        </div>
                                        <div>
                                            <Link to='/' className="d-flex p-0" style={{ color: '#7F7F7F', fontSize: '0.75em' }}>
                                                <p className="mb-0 align-self-center">CONTINUAR COMPRANDO</p><RiArrowRightSLine className="align-self-center" />
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-11 col-md summary p-3 mx-auto mb-4">
                                    <p className="summary-title mb-0">RESUMEN DE COMPRA</p>
                                    <hr className="my-2" style={{ borderColor: "#D8D8D8" }} />
                                    <div className="total-summary d-flex">
                                        <p className="mb-0">TOTAL</p>
                                        <p className="ml-auto mb-0">${totalPrice}</p>
                                    </div>
                                    <Link to='/checkout'>
                                    <button type="button" className="mt-3 checkoutBtn border-0 less btn btn-primary">INICIAR PAGO</button>
                                    </Link>
                                </div>
                            </>
                    }
                </div>
            </div>
        </section>
    )
}