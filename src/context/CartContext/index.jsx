import React, { useState, createContext, useEffect, useCallback } from 'react';
import { getFirestore } from '../../firebase/client';
import firebase from 'firebase/app';
import '@firebase/firestore';

export const CartContext = createContext([]);

const { Provider } = CartContext;

export const CustomProvider = ({ children }) => {

    const [cart, setCart] = useState(() => {
        const localData = localStorage.getItem('cart');
        return (localData ? JSON.parse(localData) : [])
    });

    const [purchaseComplete, setPurchaseComplete] = useState(false);
    const [purchaseId, setPurchaseId] = useState('');

    let [totalPrice, setTotalPrice] = useState(0);

    const addItem = (item, quantity) => {
        let repeatedIndex = cart.findIndex(element => element.item.idDB === item.idDB);

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
        let aux = cart.filter(element => element.item.idDB !== id);
        setCart(aux);
    };

    const getTotalPrice = useCallback(() => {
        let total = cart.reduce((accumulatedTotal, cartItem) => {
            return + accumulatedTotal + cartItem.item.price * cartItem.quantity;
        }, 0);
        setTotalPrice(total);
    }, [cart])

    const createOrder = (name, surname, email, phone, dni) => {
        const buyer = { name: name, surname: surname, email: email, phone: phone, dni: dni };
        const order = { buyer: buyer, items: cart, total: totalPrice, date: firebase.firestore.Timestamp.fromDate(new Date()) };
        const DB = getFirestore();
        const ORDERS = DB.collection('orders');
        ORDERS.add(order).then(({ id }) => {
            setPurchaseId(id);
            const batch = DB.batch();
            const itemsRef = DB.collection('productos');
            cart.forEach((element) => {
                batch.update(itemsRef.doc(element.item.idDB), { stock: element.item.stock - element.quantity })
            })
            batch.commit().then(() => {
                clear();
                setPurchaseComplete(true);
            })
        })
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        getTotalPrice();
    }, [cart, getTotalPrice]);

    return (
        <Provider value={{ addItem, cart, clear, removeItem, totalPrice, createOrder, purchaseComplete, setPurchaseComplete, purchaseId }}>
            {children}
        </Provider>
    )
};