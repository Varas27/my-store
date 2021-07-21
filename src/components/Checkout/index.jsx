import './styles.css';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from './../../context/CartContext/';

export const Checkout = () => {
    const { totalPrice, createOrder } = useContext(CartContext);

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dni, setDni] = useState('');

    return (
        <section> {/* Falta CSS y validaciones de input, pero las ordenes funcionan y se actualiza el stock al comprar. */}
            <h2 className="text-center mx-3 mb-3">Checkout</h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-9 row mx-auto mb-4">
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor='name'>Nombre</label>
                                    <input type="text" className="form-control" id="name" required onInput={(e) => {setName(e.target.value)}} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor='surname'>Apellido</label>
                                    <input type="text" className="form-control" id="surname" required onInput={(e) => {setSurname(e.target.value)}}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor='email'>Email</label>
                                <input type="email" className="form-control" id="email" required onInput={(e) => {setEmail(e.target.value)}}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor='phone'>Teléfono</label>
                                <input type="number" className="form-control" id="phone" required onInput={(e) => {setPhone(e.target.value)}}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor='dni'>DNI</label>
                                <input type="number" className="form-control" id="dni" required onInput={(e) => {setDni(e.target.value)}}/>
                            </div>
                        </form>
                        <button className="btn btn-primary" onClick={() => {createOrder(name, surname, email, phone, dni)}}>Comprar</button>
                    </div>
                    <div className="col-11 col-md summary p-3 mx-auto mb-4">
                        <p className="summary-title mb-0">RESUMEN DE COMPRA</p>
                        <hr className="my-2" style={{ borderColor: "#D8D8D8" }} />
                        <div className="total-summary d-flex">
                            <p className="mb-0">TOTAL</p>
                            <p className="ml-auto mb-0">${totalPrice}</p>
                        </div>
                        <Link to='/checkout'>
                            <button type="button" className="mt-3 checkoutBtn border-0 less btn btn-primary">FINALIZAR PAGO</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}