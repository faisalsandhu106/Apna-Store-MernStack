import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/CartReducer";

const CartContext = createContext()

// Get Product List In LocalStorage
const getLocalCartData = () => {
    let LocalCartData = localStorage.getItem("cartData")

    if (LocalCartData == []) {
        return []
    } else {
        return JSON.parse(LocalCartData)
    }
};

const initialState = {
    cart: getLocalCartData(),
    total_item: "",
    total_price: "",
    shipping_fee: "50",
}

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, amount, status, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, amount, status, product } })
    };

    // Cart Item Delete Button
    const updateCartData = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id })
        // console.log("Delete Product ID", id)
    };

    // Cart Clear Button
    const cartClear = () => {
        dispatch({ type: "CART_CLEAR", })
    };

    // Set Add The Data in LocalStorage
    // get & set
    useEffect(() => {
        dispatch({ type: "CART_TOTAL_ITEM_PRICE", })
        localStorage.setItem("cartData", JSON.stringify(state.cart))
    }, [state.cart])

    return (
        <CartContext.Provider value={{ ...state, addToCart, updateCartData, cartClear }}>
            {children}
        </CartContext.Provider>
    );
}

const UseCartContext = () => {
    return useContext(CartContext);
}

export { CartContext, CartProvider, UseCartContext };