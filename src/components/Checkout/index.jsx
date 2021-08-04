import './styles.css';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from './../../context/CartContext/';
import { BiError } from 'react-icons/bi';
import { BiCheck } from 'react-icons/bi';
import { BsCheckCircle } from 'react-icons/bs';
import { MdContentCopy } from 'react-icons/md';
import { MdCheck } from 'react-icons/md';
import { Animated } from "react-animated-css";

export const Checkout = () => {
    const { cart, totalPrice, createOrder, purchaseComplete, setPurchaseComplete, purchaseId } = useContext(CartContext);

    const [enabled, setEnabled] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [copied, setCopied] = useState(false);
    const [modal, setModal] = useState(false);

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dni, setDni] = useState('');

    const validatingError = () => {
        setClicked(true);
        window.scrollTo(0, 0);
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(purchaseId);
        setCopied(true);
    }

    useEffect(() => {
        if (name && surname && email && dni && /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/.test(phone) && phone.length === 10) {
            setEnabled(true);
        } else {
            setEnabled(false);
        }
        console.log(phone.length)
        if (purchaseComplete) {
            $("#form-checkout")[0].reset();
            setPurchaseComplete(false);
            setModal(true);
        }
    }, [name, surname, email, phone, dni, purchaseComplete, setPurchaseComplete])

    return (
        <section>
            <h2 className="text-center mx-3 mb-3">Checkout</h2>
            <div className="container">
                <div className="row">
                    {
                        clicked ?
                            <div className="height-animation error-box p-0 col-10 col-lg-6 row mx-auto mb-4" role="alert">
                                {
                                    !enabled ?
                                        <div className="error-icon-box col-12 col-md-4 d-flex justify-content-center align-items-center">
                                            <BiError size='125px' color='#fff' />
                                        </div>

                                        :

                                        <div className="success-icon-box col-12 col-md-4 d-flex justify-content-center align-items-center">
                                            <BiCheck size='125px' color='#fff' />
                                        </div>
                                }
                                <div className="d-flex justify-content-center col-12 col-md-8 py-2">
                                    <div>
                                        <p className="mb-0">{!enabled ? 'Completar los siguientes casilleros:' : 'Casilleros completados!'}</p>
                                        <ul className="mb-0 pl-1">
                                            {[!name ? <li key="name">Nombre</li> : null, !surname ? <li key="surname">Apellido</li> : null, !email ? <li key="email">Email</li> : null, !(phone.length === 10) ? <li key="phone">Teléfono</li> : null, !dni ? <li key="dni">DNI</li> : null]}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            :

                            null
                    }
                    <div className="col-md-9 row justify-content-center mx-auto mb-4">
                        <form id="form-checkout">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor='name'>Nombre</label>
                                    <input type="text" className="form-control" id="name" required onInput={(e) => { setName(e.target.value) }} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor='surname'>Apellido</label>
                                    <input type="text" className="form-control" id="surname" required onInput={(e) => { setSurname(e.target.value) }} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor='email'>Email</label>
                                <input type="email" className="form-control" id="email" required onInput={(e) => { setEmail(e.target.value) }} />
                            </div>
                            <div className="form-group">
                                <label htmlFor='phone'>Teléfono</label>
                                <input type="number" placeholder="Debe empezar con '11'" className="form-control" id="phone" required onInput={(e) => { setPhone(e.target.value) }} />
                            </div>
                            <div className="form-group">
                                <label htmlFor='dni'>DNI</label>
                                <input type="number" className="form-control" id="dni" required onInput={(e) => { setDni(e.target.value) }} />
                            </div>
                        </form>
                    </div>
                    <div className="col-11 col-md summary p-3 mx-auto mb-4">
                        <p className="summary-title mb-0">RESUMEN DE COMPRA</p>
                        <hr className="my-2" style={{ borderColor: "#D8D8D8" }} />
                        <div className="total-summary d-flex">
                            <p className="mb-0">TOTAL</p>
                            <p className="ml-auto mb-0">${totalPrice}</p>
                        </div>
                        <button type="button" className={cart.length ? 'mt-3 checkoutBtn border-0 btn btn-primary' : 'btn mt-3 checkoutBtnNoStock border-0'} onClick={enabled ? () => { createOrder(name, surname, email, phone, dni) } : cart.length ? validatingError : null} >FINALIZAR PAGO</button>
                    </div>
                </div>
            </div>

            {
                modal ?
                    <div className="modal-background d-flex justify-content-center align-items-center">
                        <Animated animationIn="fadeInUp" animationInDuration={400} isVisible={modal}>
                            <div className="modal-checkout mx-4">
                                <BsCheckCircle className="w-100 mb-1" size='200px' color='#09AE85' />
                                <p className="mb-3 text-center">Felicitaciones! Compra realizada con éxito.</p>
                                <div>
                                    <p className="mb-1 text-center">ID de tu compra:</p>
                                    <div className="d-flex justify-content-center">
                                        <div className="copyBox d-flex ml-1">
                                            <p className="mb-0 mx-2">{purchaseId}</p>
                                            <button className="btn copyIcon py-0 px-2" onClick={copyToClipboard}>
                                                {
                                                    !copied ?
                                                        <MdContentCopy size='1.1rem' color='#fff' />
                                                        :
                                                        <MdCheck size='1.1rem' color='#fff' />
                                                }
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <Link to='/'>
                                    <button className="w-100 btn mt-5" id="addToCart">Ir al catálogo</button>
                                </Link>
                            </div>
                        </Animated>
                    </div>
                    :
                    null
            }
        </section>
    )
}