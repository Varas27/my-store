import React, { useState, createContext, useEffect } from 'react';
import { getFirestore } from '../../firebase/client';

export const CartContext = createContext([]);

const { Provider } = CartContext;

export const CustomProvider = ({ children }) => {

    const [listProducts, setListProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [cart, setCart] = useState(() => {
        const localData = localStorage.getItem('cart');
        return (localData ? JSON.parse(localData) : [])
    });

    let [totalPrice, setTotalPrice] = useState(0)

    const addItem = (item, quantity) => {
        let repeatedIndex = cart.findIndex(element => element.item.id === item.id);

        if (repeatedIndex !== -1) {
            let aux = cart;
            aux[repeatedIndex] = { item, quantity: quantity }
            setCart(aux);
        } else {
            setCart([...cart, { item, quantity }]);
        }
        getTotalPrice();
    }

    const clear = () => {
        setCart([]);
    };

    const removeItem = (id) => {
        let aux = cart.filter(element => element.item.id !== id);
        setCart(aux);
    };

    const getTotalPrice = () => {
        let total = cart.reduce((accumulatedTotal, cartItem) => {
            return  + accumulatedTotal + cartItem.item.price * cartItem.quantity;
        }, 0);
        setTotalPrice(total);
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));

        getTotalPrice();

        const DB = getFirestore();
        const COLLECTION = DB.collection('productos');
        async function getData(){
            const RESPONSE = await COLLECTION.get()
            setListProducts(RESPONSE.docs.map(element => element.data()))
            setTimeout(() => {
                setLoading(false)
            })
        }
        getData();
    });

    return (
        <Provider value={{ addItem, cart, clear, removeItem, totalPrice, listProducts, loading }}>
            {children}
        </Provider>
    )
};