import React, { useState, createContext, useEffect } from 'react';
import isEqual from 'lodash/isEqual';

export const CartContext = createContext([]);

const {Provider} = CartContext;

export const CustomProvider = ({children}) => {

    const [cart, setCart] = useState(() => {
        const localData = localStorage.getItem('cart');
        return( localData ? JSON.parse(localData) : [] )
    });

    const addItem = (item, quantity) => {
        let aux = cart.map(element => element.item.id === item.id ? {...element, quantity: quantity + element.quantity} : element);
        if (isEqual(cart, aux)) {
            aux.push({item, quantity});
            setCart(aux);
        } else {
            setCart(aux);
        }
    };
    console.log(cart);

    
    const clear = () => {
        setCart([]);
    };

    const removeItem = (id) => {
        let aux = cart.filter(element => element.item.id !== 1);
        setCart(aux);
    }; //El id del producto será enviado desde el cart una vez lo haya realizado, ahora está el 1 a modo de prueba

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    },[cart])

    return (
        <Provider value={{ addItem, cart, clear, removeItem }}>
            {children}
        </Provider>
    )
};