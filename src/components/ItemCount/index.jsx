import './styles.css';
import { useState } from 'react';
import { HiOutlinePlusCircle } from 'react-icons/hi';
import { HiOutlineMinusCircle } from 'react-icons/hi';

export const ItemCountComponent = ({initial, stock}) => {
    const [counter, setCounter] = useState(1);

    const increment = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }

    const decrement = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="card col-9 col-md-5 col-lg-4" id="card-counter">
                    <div className="card-body">
                        <h5 className="card-title">Cantidad</h5>
                            <div className="row mt-4" id="counter">
                                <button className="btn p-0 mr-auto shadow-none" type="button" onClick={decrement}>
                                    <HiOutlineMinusCircle size="30" color={counter === initial ? '#C2E7F5' : '#2294C6'}/>
                                </button>
                                <p className="m-0 mx-4 align-self-center">{counter}</p>
                                <button className="btn p-0 ml-auto shadow-none" type="button" onClick={increment}>
                                    <HiOutlinePlusCircle size="30" color={counter === stock ? '#C2E7F5' : '#2294C6'} />
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}