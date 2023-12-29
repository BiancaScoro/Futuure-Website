import React, { useEffect, createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [itemAmount, setItemAmount] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const total = cart.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.price * currentItem.amount
        }, 0)
        setTotal(total)
    }, [cart]);

    useEffect(() => {
        if (cart) {
            const amount = cart.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.amount
            }, 0)
            setItemAmount(amount)
        }
    }, [cart]);
    
    const addToCart = (product, id) => {
        const newItem = {...product, amount: 1}
        const cartItem = cart.find((item) => item.id === id);

        if (cartItem) {
            const newCart = cart.map((item) => {
                return item.id === id ? {...item, amount: item.amount + 1} : item;
            });
            setCart(newCart)
        } else {
            setCart([...cart, newItem])
        }
    }

    const increaseAmount = (id) => {
        const cartItem = cart.find((item) => item.id === id);
        addToCart(cartItem, id);
    }

    const decreaseAmount = (id) => {
        const cartItem = cart.find((item) => {
            return item.id === id;
        })
        if (cartItem) {
        const newCart = cart.map((item) => {
            if (item.id === id) {
                return {...item, amount: item.amount - 1}
            } else {
                return item;
            }
        });
        setCart(newCart)           
    }   if (cartItem.amount < 2) {
        removeFromCart(id)
    }
}

    const removeFromCart = (id) => {
        const newCart = cart.filter((item) => {
            return item.id !== id;
        });
        setCart(newCart)
    }

    const clearCart = (product, id) => {
        setCart([])
    }

    return(
    <CartContext.Provider value={{ cart, addToCart, decreaseAmount, increaseAmount, removeFromCart, itemAmount, total, clearCart}}>
        {children}
    </CartContext.Provider>
    )
}

export default CartProvider