
const CartReducer = (state, action) => {

    //* Add Product From CartSection
    if (action.type === "REMOVE_ITEM") {
        let updateCart = state.cart.filter((curElem) => {
            return curElem.id !== action.payload
        })
        console.log("Delete Product", updateCart)

        return {
            ...state,
            cart: updateCart
        }
    };
    if (action.type === "ADD_TO_CART") {
        let { id, amount, status, product } = action.payload;
        // console.log(product)
        let existingProduct = state.cart.find((curitem) => curitem.id === id)
        if (existingProduct) {
            let updatedProduct = state.cart.map((curElem) => {
                if (curElem.id === id) {
                    let newAmount = curElem.amount + amount
                    return {
                        ...curElem,
                        amount: newAmount
                    }
                } else {
                    return curElem
                }
            })

            return {
                ...state,
                cart: updatedProduct,
            }

        } else {
            let cartProducts = {
                id,
                title: product.title,
                amount,
                images: product.images[0],
                price: product.price,
                status,
            }

            return {
                cart: [...state.cart, cartProducts],
            }
        }
    };

    //* Delete Product From CartSection
    if (action.type === "REMOVE_ITEM") {
        let updateCart = state.cart.filter((curElem) => {
            return curElem.id !== action.payload
        })
        console.log("Delete Product", updateCart)

        return {
            ...state,
            cart: updateCart
        }
    };

    //* Clear Product List From CartSection
    if (action.type === "CART_CLEAR") {
        return {
            ...state,
            cart: []
        };
    };

    //* Total Item In CartSection
    if (action.type === "CART_TOTAL_ITEM_PRICE") {
        const { total_item, total_price } = state.cart.reduce((accum, curElem) => {
            let { price, amount } = curElem

            accum.total_item += amount
            accum.total_price += price * amount

            return accum;
        }, { total_item: 0, total_price: 0, })

        return {
            ...state,
            total_item,
            total_price,
        }
    };

    return state

}
export default CartReducer